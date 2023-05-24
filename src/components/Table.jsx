import React, { useEffect,useState } from 'react'


const table = ({productsData}) => {
  const [product, setProducts] = useState([])
  useEffect(() => {
    console.log(productsData)
    setProducts(productsData)
  }, [productsData])
    return (
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Producto</th>
      <th scope="col">precio</th>
      <th scope="col">acciones</th>
    </tr>
  </thead>
  <tbody>
    
  {productsData.map((product)=> ( 
    <tr key={product.id}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
    ))}

    
  </tbody>
</table>
    )
}

export default table
