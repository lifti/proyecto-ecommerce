import React from 'react'

const Search = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <form class="container-fluid">
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon1">Buscar</span>
                        <input type="text" class="form-control" placeholder="Producto" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                </form>
            </nav>
        </div>
    )
}

export default Search
