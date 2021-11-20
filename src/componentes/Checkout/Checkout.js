import React from "react"
import {Form,Button} from "react-bootstrap"
import {useState} from "react"
import { CartContext} from '../../context/CartContext'
import { useContext } from "react"
import { Redirect } from 'react-router'
import "firebase/firestore"
import Swal from 'sweetalert2'

import { generarOrden } from '../../firebase/generarOrden'


export const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const {carrito, calcularTotal, vaciarCarrito} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: ''
        
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length < 3) {
          Swal.fire({
            icon: 'error',
            title: 'Nombre invalido',
            
          })
            return
        }
        if (values.apellido.length < 3) {
          Swal.fire({
            icon: 'error',
            title: 'Apellido invalido',
            
          })
            return
        }
        if (values.email.length < 3) {
          Swal.fire({
            icon: 'error',
            title: 'Email invalido',
            
          })
            return
        }
      

        setLoading(true)
        generarOrden(values, carrito, calcularTotal())
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Su adopción fue registrada',
                    text: `Guarde su Nro de operación: ${res}`,
                    willClose: () => {
                        vaciarCarrito()
                    }
                })
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'ya fue adoptado',
                    text:" por favor busca otro perrito",
                    willClose: () => {
                      vaciarCarrito()
                    }
                })
            })
            .finally(() => {
              setLoading(false)
            })
    }





  
        return (
    <>
          {carrito.length === 0 && <Redirect to="/"/>}
          {loading && <h2>Loading...</h2>}
       
       

         <div>
           <h2>Ingrese sus datos </h2>
           <hr/>
         </div>

            <Form onSubmit={handleSubmit}
            className="container mt-3">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre"
                               name="nombre"
                               value={values.nombre}
                               onChange={handleInputChange}
                />
              </Form.Group>

             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Apellido"
                               name="apellido"
                               value={values.apellido}
                               onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email de contacto</Form.Label>
                <Form.Control type="email" placeholder="name@example.com"
                              name="email"
                              value={values.email}
                              onChange={handleInputChange}
                
                />
            </Form.Group>

           

            <Button type="submit" disabled={loading} variant="outline-secondary">Finalizar</Button>
          </Form>
          
    
    </>
        )
        
        
        }

