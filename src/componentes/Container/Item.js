import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './ItemListContainer.css';


export const Item = ( {id, nombre, descripcion, edad,category,img} ) => {

    return (
     
     
        <div className= "card m-3"  style={{ width: '15rem', height: '25rem' }} >
          <div className="card-body bg-light text-dark "> 
            <img src={img} width="90rem" height="100rem"alt= {`${nombre} ${descripcion}`} className="card-img-top"></img>
               <p className= "card-title">{nombre}</p>
               <p className= "card-subtitle mb-2 text-muted"> {descripcion}</p>
               <p className= "card-title"> Edad: {edad} años</p>
               <p className= "card-title"> Categoria: {category}</p>
               <Link to={`/detail/${id}`}>
                    <Button  variant="primary">Adoptar</Button>
                </Link>
            </div>   
          </div>
       
     
    


    )
}