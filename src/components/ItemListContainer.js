import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {
    return (
        <div>
            <h3>
                {props.saludo}
            </h3>
            <ItemCount stock={10} inicial={1}/>
        </div>
    )
}

export default ItemListContainer