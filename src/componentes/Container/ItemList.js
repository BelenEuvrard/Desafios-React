import React from 'react'
import { Item } from './Item'

export const ItemList = ( {products = []} ) => {

    return (
        <div className="d-flex jutify-content-start flex-wrap">
            { products.map( item  => <Item {...item} key={item.id}/> )}
        </div>
    )
}