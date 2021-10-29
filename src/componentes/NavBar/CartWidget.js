import React, {useContext} from "react";
import ImgCarrito from "./carrito-de-compras.png";
import { CartContext } from '../../context/CartContext'
import "./Navbar.css";
export const CartWidget = () => {
  
    const { calcularCantidad } = useContext(CartContext)
    
    return (
             <div style={{
                visibility: calcularCantidad() === 0 ? "hidden" : "visible"
            }}>
                 <img src= {ImgCarrito} className="imgCarrito" alt="img carrito de compras" height="45" width="45"/>
                   <span className="text-decoration-none mx-1 text-white">{calcularCantidad()}</span>

              </div>
    )
}