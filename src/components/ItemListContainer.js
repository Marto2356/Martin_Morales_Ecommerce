import React, {useEffect,useState} from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import productosBack from '../assets/productos'

const ItemListContainer = (props) => {

    const [listaProductos, setListaProductos] = useState([])

    useEffect(() => {
        const promise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(productosBack);
            },2000);
        }).then((productos) => {
            setListaProductos(productos);
        });
    });

    return (
        <div>
            <ItemList lista={listaProductos}/>
            <ItemCount stock={10} inicial={1}/>
        </div>
    )
}

export default ItemListContainer