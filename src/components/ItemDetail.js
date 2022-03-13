import React from 'react'

const ItemDetail = (props) => {
    const nombre = props.producto.nombre;
    const generos = props.producto.generos;
    const autor = props.producto.autor;
    const fecha = props.producto.fecha;
    const precio = props.producto.precio;

    return (
        <div>
            <h1>Producto: {nombre}</h1>
            <h3>Género: {generos}</h3>
            <h3>Autor: {autor}</h3>
            <h3>Fecha: {fecha}</h3>
            <h3>Precio: ${precio}</h3>
        </div>
    )
}

export default ItemDetail