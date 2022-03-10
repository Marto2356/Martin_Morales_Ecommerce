import React from 'react'

const Item = (props) => {
    console.log(props)

    const producto = props.producto

    return (
        <div>
            <h3>{producto.nombre}</h3>
            <h4>${producto.precio}</h4>
        </div>
    )
}

export default Item