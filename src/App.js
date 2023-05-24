import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import Form from './components/Form';
import Nav from './components/Nav';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [productToUpdate, setProductToUpdate] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3306/product");
        const products = await response.json();
        setProducts(products);
        console.log("product", products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const handleAddCollaborator = async (product) => {
    try {
      const createproduct = {
        ...product,
      };
      const response = await fetch("http://localhost:3306/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createproduct),

      });
      if (!response.ok) { 
        throw new Error(`HTTP error! status: ${response.status}`);
      }else{
        
      }
    } catch (error) {
    }


  }
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };
  const handleUpdateProduct = (isUpdating, productToUpdate) => {
    setIsUpdating(isUpdating);
    setProductToUpdate(productToUpdate);
  }
  const handleUpdateListProducts = async (product) => {
    try {
      if(!product.id){
        throw new Error("No se puede actualizar el producto, no tiene id");
        
      }
      
      const response = await fetch(`http://localhost:3306/product/${product.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(product),
      });
      setProducts(products.map((p) => (p.id === product.id ? product : p)));
      setIsUpdating(false);
      setProductToUpdate(null);

    } catch (error) {
      console.log("Error updating product:", error);
    }
  }
  return (
    <div className="container-fluid">
      <Nav onSearchChange={handleSearchChange} />
      <div className="container">
        <h1>Lista de Productos</h1>
        <Form
          onSubmit={handleAddCollaborator}
          onUpdateProduct={handleUpdateListProducts}
          isUpdating={isUpdating}
          productToUpdate={productToUpdate} />
        <Table productsData={products} searchTerm={searchTerm} onUpdateProduct={handleUpdateProduct} />
      </div>
    </div>
  );
}

export default App;
