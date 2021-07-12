import React from 'react'

const Search = () => {

    

    return (
        <div>
            <nav ClassName="navbar navbar-light bg-light">
                <form ClassName="container-fluid">
                    <div ClassName="input-group">
                        <span ClassName="input-group-text" id="basic-addon1">Buscar Producto</span>
                        <input type="text" ClassName="form-control" placeholder="Introduzca parametro" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                </form>
            </nav>
        </div>
    )
}

export default Search
