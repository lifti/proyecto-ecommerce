import React from 'react'

const Navbar = () => {
    return (
       
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <img src="../assets/Bienti.jpeg"  alt="logo" width="30" height="24"></img>
                <p>Bienti</p>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signup">Signup</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      
    )
}

export default Navbar
