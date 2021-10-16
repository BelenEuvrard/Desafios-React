import React from "react"
import {Form,Button} from "react-bootstrap"
export const ContactoPag = () => {

    

        return (
            <Form className="container mt-3">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email de contacto</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Deje su mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="outline-secondary">Enviar</Button>
          </Form>
          
    
    
        )
    }


