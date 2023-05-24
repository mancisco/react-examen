
const Nav = () => {
    return(
        <nav class="navbar bg-body-tertiary bg-dark">
            <div class="container-fluid">
                 <p class="navbar-brand tect-white">examen</p>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
            </div>
        </nav>
    )
}

export default Nav;