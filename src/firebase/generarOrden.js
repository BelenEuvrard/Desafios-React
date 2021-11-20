import { getFirestore } from './configuracion'
import firebase from 'firebase'
import 'firebase/firestore'

export const generarOrden =  (datos, carrito, total) => {

    return new Promise(async (resolve, reject) => {

        // se genera el objeto orden
        const orden = {
            buyer: datos,
            items: carrito.map((el) => ({id: el.id, nombre: el.nombre, cantidad: el.cantidad})),
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }
        // enviar la orden a firestore

        // batch de atualizacion

        const db = getFirestore()
        const orders = db.collection('orders')
        const itemsToUpdate = db.collection('Productos')
            .where(firebase.firestore.FieldPath.documentId(), 'in', carrito.map(el => el.id))
            
        const query = await itemsToUpdate.get()
        const batch = db.batch()

        const outOfStock = []

        query.docs.forEach((doc) => {
            const itemInCart = carrito.find(prod => prod.id === doc.id)

            if (doc.data().cant >= itemInCart.cantidad) {
                batch.update(doc.ref, {cant: doc.data().cant - itemInCart.cantidad})
            } else {
                outOfStock.push({...doc.data(), id: doc.id})
            }
        })

        if (outOfStock.length === 0) {
            orders.add(orden)
                .then((res) => {
                    batch.commit()
                    resolve(res.id)
                    
                })
        } else {
            
           reject(outOfStock)
        }
    })   
}