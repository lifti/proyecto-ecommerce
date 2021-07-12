import React from 'react'




const Productos = (props) => {

    let {product_name, description, price, image} = props;

    return (
        <div ClassName="card" style={{width: "18rem"}}>
            <img src={image} ClassName="card-img-top" alt="..."></img>
                <div ClassName="card-body">
                    <h5 ClassName="card-title">{product_name}</h5>
                    <p ClassName="card-text">{description}</p>
                    <h3 ClassName="card-text">{price}</h3>
                    <a href="a" ClassName="btn btn-primary">Comprar</a>
                </div>
        </div>
    )
}

export default Productos
