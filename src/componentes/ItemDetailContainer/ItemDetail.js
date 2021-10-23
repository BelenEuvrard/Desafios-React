import React from 'react'
import { useHistory } from 'react-router'
import {useState, useContext} from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'



export const ItemDetail = ({id, nombre, descripcion, edad,category,img,cant}) => {

    const {goBack, push} = useHistory()

    const {addToCart, isInCart} = useContext(CartContext)

    const [ cantidad, setCantidad] = useState(0)
  
    const handleAgregar = () => {
     const newItem ={
        id,
        nombre,
        edad,
        category,
        cantidad,
    

     }
     if (cantidad > 0) {
        addToCart(newItem)
    }
       
    }


    return (
        <div className="container">
            <div className= "card m-3 "  style={{ width: '18rem' }} >
               <div className="card-body bg-light text-dark "> 
            <h2>{nombre}</h2>
            <img src={img} width="40px" height="200px"alt= {`${nombre} ${descripcion}`} className="card-img-top"></img>
            <p>{descripcion}</p>
            <p>{category}</p>
            <h4>Edad: {edad} años</h4>
            {/* opción de compra / contador */}
            
            { isInCart(id) 
                ? <Link to="/cart" className="btn btn-success">Terminar la Adopción</Link>
                :
                    <>
                        <ItemCount cantidad={cantidad} modify={setCantidad} max={cant}/>
                        <button
                            className="btn btn-success my-2"
                            onClick={handleAgregar}
                            >
                            Agregar
                        </button>
                    </>
            }

            <hr/>
            <button 
                className="btn btn-primary btn-sm mx-3"
                onClick={() => goBack()}
            >
                Volver
            </button>

            <button 
                className="btn btn-outline-seconsary btn-sm my-3"
                onClick={() => push("/")}
            >
                Volver al inicio
            </button>
           </div>
          </div>
        </div>
    )
}
