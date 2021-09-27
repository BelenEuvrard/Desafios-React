import React from "react";

export const HomeView = ({ titulo,contenido}) =>{

    return (
    <div>
          <h1> {titulo} </h1>
          <hr/>
          <p> {contenido} </p>
    </div>
  
    )

}