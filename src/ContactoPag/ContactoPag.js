import React from "react"
import {Form,Button} from "react-bootstrap"
import {useState} from "react"



export const ContactoPag = () => {
 

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
    
    console.log(values)
    
    
}
    

        return (
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

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
               <Form.Label>Deje su mensaje</Form.Label>
               <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button type="submit" variant="outline-secondary">Enviar</Button>
          </Form>
          
    
    
        )
    }


