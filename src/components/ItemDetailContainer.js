import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail"
import productosBack from '../assets/productos'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})

    const id = 1//ACA DEBO USAR USEPARAMS

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const productoBack = productosBack.find(producto => producto.id===id)
            resolve(productoBack);
        }, 2000);
        }).then((data) => {
        setProducto(data);
        });
    });

    return  <div>
                <ItemDetail producto={producto}/>
            </div>;
};

export default ItemDetailContainer;
