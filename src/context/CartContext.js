import React, { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState(init)

    console.log(carrito)
    
    const addToCart = (item) => {
      setCarrito( [...carrito, item] )
    }
    
    const removeItem = (itemId) => {
      const newCart = carrito.filter( (prod) => prod.id !== itemId)
      setCarrito( newCart )
    }
  
    const calcularCantidad = () => {
      return carrito.reduce( (acc, prod) => acc + prod.cantidad, 0 )
    }

    const calcularTotal = () => {
      return carrito.reduce( (acc, prod) => acc + prod.cantidad * 500, 0)
    }

    const isInCart = (itemId) => {
      return carrito.some( (prod) => prod.id === itemId)
    }
  
    const vaciarCarrito = () => {
      setCarrito([])
    }
    
    useEffect(()=>{
      localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])
  
    return (
        <CartContext.Provider value={ {
            carrito,
            addToCart,
            removeItem,
            calcularCantidad,
            vaciarCarrito,
            isInCart,
            calcularTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}