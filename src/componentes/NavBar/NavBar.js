import React from "react";
import {CartWidget} from "./CartWidget"
import "./Navbar.css";


export const NavBar = () => {

    return (
        

            
             <nav>
              
        
                 <ul className="navLista">
                  <h1> Mi App </h1> 
                     <li><a className="navListaItem" href="# top">Home</a></li>
                     <li><a className="navListaItem" href="# top">productos</a></li>
                     <li><a className="navListaItem" href="# top">contacto</a></li>
                 </ul>
                         <CartWidget/>
             </nav>

    
    )

}