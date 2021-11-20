import React from "react";
import { Link } from 'react-router-dom'
import {CartWidget} from "./CartWidget"
import "./Navbar.css";


export const NavBar = () => {

    return (
        

            
        <nav className="bg-black">
              
                   <div className="navLista"> 
                  <h1> Mi App </h1> 
                     <Link to="/Home" className="navListaItem">Home</Link>
                     <Link to="/Adopciones" className="navListaItem">Adopciones</Link>
                     <Link to="/Adopciones/Macho" className="navListaItem">Machos</Link>
                     <Link to="/Adopciones/Hembra" className="navListaItem">Hembras</Link>
                     <Link to="/Contacto" className="navListaItem">Contacto</Link>
                  
    
                         <Link to="/cart"><CartWidget/></Link>

                      </div>   
             </nav>

    
    )

}