import React from 'react'

const Navbar = () => {
    return (
        <div>
        <nav ClassName="navbar navbar-expand-lg navbar-light bg-light">
            <div ClassName="container-fluid">
            <img src="./assets/Login Bienti circulo.jpeg"  alt="" width="30" height="24"></img>
                <a ClassName="navbar-brand" href="a">Bienti</a>
                <div ClassName="collapse navbar-collapse" id="navbarNav">
                    <ul ClassName="navbar-nav">
                        <li ClassName="nav-item">
                            <a ClassName="nav-link active" aria-current="page" href="a">Home</a>
                        </li>
                        <li ClassName="nav-item">
                            <a ClassName="nav-link" href="a">Signup</a>
                        </li>
                        <li ClassName="nav-item">
                            <a ClassName="nav-link" href="a">login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Navbar
