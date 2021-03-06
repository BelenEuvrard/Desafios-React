import React from "react"


export const ItemCount = ({cantidad,modify,max}) => {

    const handleRestar = () => {
        if (cantidad > 0)  {
            modify(cantidad - 1)
        }
    }

    const handleSumar = () => {
        if (cantidad < max) {
            modify(cantidad + 1)
        }
    }

    return(

        <div>
              <button 
              onClick={handleRestar}
              className="btn btn-secondary btn-sm my-3"> -

              </button>

              <span className="mx-3">{cantidad}</span>

              <button 
               onClick={handleSumar}
              className="btn btn-secondary btn-sm my-3"> +

              </button>

        </div>
    )
}