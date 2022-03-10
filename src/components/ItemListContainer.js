import React, {useEffect,useState} from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const productosBack = [
    {id: 1, nombre: 'Cien años de soledad', autor: 'Gabriel García Márquez', fecha: 1967, géneros: 'Novela, Realismo mágico, Ficción, Alta fantasía, Saga familiar', precio:2200, stock:8},
    {id: 2, nombre: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', fecha: 1605, géneros: 'Novela, Sátira, Parodia, Farsa', precio:3100, stock:12},
    {id: 3, nombre: 'En busca del tiempo perdido', autor: 'Marcel Proust', fecha: 1913, géneros:'Literatura modernista, Novela filosófica, Novela social', precio:999, stock:4},
    {id: 4, nombre: 'El proceso', autor:'Franz Kafka', fecha: 1925, géneros:'Novela, Absurdo, Novela filosófica, ficción paranoide', precio:4600, stock:16},
    {id: 5, nombre: 'Los viajes de Gulliver', autor:'Jonathan Swift', fecha:1726, géneros:'Sátira, Literatura fantástica, Ficción de aventuras', precio:2800, stock:3},
]

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