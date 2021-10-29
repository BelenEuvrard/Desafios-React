import React,{useEffect,useState} from "react";
import { useParams } from 'react-router-dom'
import { ItemList } from '../Container/ItemList'

import { getFirestore } from '../../firebase/configuracion'


export const ItemListContainer = ( ) => {
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()

    useEffect(()=>{ 
       setLoading(true)
       const db = getFirestore();
       const productos = categoryId
         ? db.collection('Productos').where('category', '==', categoryId)
         : db.collection('Productos');
   
         productos.get()
         .then((response) => {
             const newItems = response.docs.map((doc) => {
                 return {id: doc.id, ...doc.data()}
             })

             setItems(newItems)
             console.log(newItems)
         })
         .catch( err => console.log(err))
         .finally(() => {
             setLoading(false)}
         )
     
 }, [categoryId, setLoading])

     
   

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

    
