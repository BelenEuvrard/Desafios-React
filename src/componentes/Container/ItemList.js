import React from 'react'
import { Item } from './Item'

export const ItemList = ( {products = []} ) => {

    return (
        <div className="d-flex justify-content-around">
            { products.map( item  => <Item {...item} key={item.id}/> )}
        </div>
    )
}