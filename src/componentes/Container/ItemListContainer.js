import React,{useEffect,useState} from "react";
import { useParams } from 'react-router'
import { ItemList } from '../Container/ItemList'
import { fetchItems } from '../../Helpers/fetchItems'


export const ItemListContainer = ( ) => {
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()

    useEffect(()=>{ 
        setLoading(true)

        fetchItems()
        .then((res) => {
            if (categoryId) {
                setItems(res.filter((prod) => prod.category === categoryId));
              } else {
                setItems(res);
              }
            })

            
            .catch( err => console.log(err))
            .finally( () => {
                setLoading(false)
            })

    }, [categoryId])


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


