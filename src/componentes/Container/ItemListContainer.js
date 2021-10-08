import React,{useEffect,useState} from "react";
import { ItemList } from '../Container/ItemList'
import { fetchItems } from '../../Helpers/fetchItems'


export const ItemListContainer = ( ) => {
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)

        fetchItems()
            .then( res => {
                setItems(res)
            })
            .catch( err => console.log(err))
            .finally( () => {
                setLoading(false)
            })

    }, [])


    return (
        <section className="item-card-section">
            {
                loading 
                ? <h2>Loading...</h2>
                : <ItemList products={items} />
            }
        </section>
    )
}


