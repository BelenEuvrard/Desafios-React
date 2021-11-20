import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const CartScreen = () => {

    const {carrito, vaciarCarrito, removeItem, calcularTotal} = useContext(CartContext)


    return (
        <div className="container my-5">
             <div className= "card m-3 "  style={{ width: '20rem' }} >
                <div className="card-body bg-light text-dark "> 

            {
                carrito.length === 0
                ? <>
                    <h2>No hay perros agregados</h2>
                    <Link to="/Adopciones" className="btn btn-warning btn-sm btn-block ">Ir a comprar</Link>
                 </>
                :
                    <>
                        <h2>Resumen de su Colaboración</h2>
                        <hr/>

                        {
                            carrito.map( (prod) => (
                                <div>
                                    <h4>{prod.nombre}</h4>
                                    <p>Cantidad: {prod.cantidad}</p>
                                    <p>Donacion:$ {prod.cantidad * 500}</p>
                                    
                                    <button className="btn btn-danger btn-sm" onClick={() => removeItem(prod.id)}>
                                      Borrar Item
                                    </button>
                                </div>
                            ))
                        }

                        <hr/>
                        <h3 className="my-3">Donación total: ${calcularTotal()}</h3>
                        <p>Tu donación ayuda a seguir rescantando mas perritos</p>
                        <button
                            className="btn btn-danger btn-sm mx-3"
                            onClick={vaciarCarrito}
                        >
                            Vaciar carrito
                        </button>
                        <Link to="/Checkout" className="btn btn-success btn-sm">
                        Terminar mi adopción
                        </Link>
                    </>
            } 

          </div>
         </div>
        </div>
    )
}