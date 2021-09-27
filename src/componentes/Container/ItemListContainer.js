import React from "react";


export const ItemListContainer = ({ titulo,contenido}) =>{

    return (
    <div>
          <h2> {titulo} </h2>
          <hr/>
          <p> {contenido} </p>
    </div>
  
    )

}