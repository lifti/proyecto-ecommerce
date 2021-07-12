import React from 'react'

const Registro = () => {
    return (
        <div className="container d-flex flex-wrap">
             <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"></input>
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                
                <button type="submit" className="btn btn-primary">Ingresar</button>
            </form>
        </div>
    )
}

export default Registro
