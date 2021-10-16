import React from 'react'
import { useHistory } from 'react-router'




export const ItemDetail = ({id, nombre, descripcion, edad,category,img}) => {

    const {goBack, push} = useHistory()


    return (
        <div>
            <h2>{nombre}</h2>
            <img src={img} width="90rem" height="100rem"alt= {`${nombre} ${descripcion}`} className="card-img-top"></img>
            <p>{descripcion}</p>
            <p>{category}</p>
            <h4>Edad: ${edad}</h4>
            {/* opción de compra / contador */}

            <button 
                className="btn btn-primary"
                onClick={() => goBack()}
            >
                Volver
            </button>

            <button onClick={() => push("/")}>
                Volver al inicio
            </button>
        </div>
    )
}
