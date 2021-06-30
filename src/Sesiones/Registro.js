import React from 'react'

const Registro = () => {
    return (
        <div>
             <form>
                <div ClassName="mb-3">
                    <label for="exampleInputEmail1" ClassName="form-label">Email address</label>
                    <input type="email" ClassName="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <div id="emailHelp" ClassName="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div ClassName="mb-3">
                    <label for="exampleInputPassword1" ClassName="form-label">Password</label>
                    <input type="password" ClassName="form-control" id="exampleInputPassword1"></input>
                </div>

                <div ClassName="mb-3 form-check">
                    <input type="checkbox" ClassName="form-check-input" id="exampleCheck1"></input>
                    <label ClassName="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                
                <button type="submit" ClassName="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Registro
