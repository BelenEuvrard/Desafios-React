import React from 'react';

import './ItemListContainer.css';


export const Item = ( {id, nombre, descripcion, edad,img} ) => {

    return (
        <div className= "card m-3 "  style={{ width: '18rem' }} >
          <div className="card-body bg-light text-dark "> 
            <img src={img} width="90rem" height="100rem"alt= {`${nombre} ${descripcion}`} className="card-img-top"></img>
               <p className= "card-title">{nombre}</p>
               <p className= "card-subtitle mb-2 text-muted"> {descripcion}</p>
               <p className= "card-title"> Edad: {edad}</p>
               <button className="btn btn-secondary" >Agregar</button>
          </div>
        </div>  
      


    )
}