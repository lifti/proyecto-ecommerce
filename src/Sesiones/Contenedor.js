import React, { useEffect, useState } from 'react'
//import React from 'react'
import Productos from './Productos';

const Contenedor = () => {

    const [productos, setProductos] = useState([]);
    
    const getProductos = () => {

        const URL_IMAGE = `https://ecomerce-master.herokuapp.com/api/v1/item`;

        fetch(URL_IMAGE)
        .then(respuesta => respuesta.json())
        .then(response => {
            console.log(response);

            setProductos(response.data)
            
        }); 
            
    }

    useEffect(() => {
        console.log("soy use effect");

        getProductos ('demo');
    }, []);

    return (
        <div>
            <h3>Productos</h3>
            <section className="d-flex flex-wrap">
                <div ClassName="d-flex flex-wrap">
                    
                    {
                        
                            productos.map((producto, index) => {
                            
                                return (
                                <Productos 
                                product_name={producto.product_name} 
                                image={producto.images.downsized_medium.image} 
                                description={producto.description}
                                price={producto.price}
                                key={index}></Productos>)
                            })
                            
                    }

                </div>
                
            </section>
        </div>
    )
}

export default Contenedor
