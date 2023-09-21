import React from 'react'
import {Form, Button, FloatingLabel} from 'react-bootstrap';


export default function Contact() {

    return (
        <div className='d-flex flex-column align-items-center py-5'>
            <h5>Cuentanos, ¿en qué podemos ayudar?</h5>
                <Form ref={form} noValidate onSubmit={(e) => handleSubmit(e)} className='form'>
                <Form.Floating className="mb-3">
                <Form.Control
                    id="floatingInputCustom"
                    type="email"
                    placeholder="name@example.com"
                />
                <label htmlFor="floatingInputCustom">Correo Electrónico</label>
                </Form.Floating>
                <Form.Floating className="mb-3"  >
                    <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder="Descripcion"
                    />
                    <label htmlFor="floatingInputCustom">Descripción</label>
                </Form.Floating>
                </Form>
                <Button className='bottonColor' type="submit" variant='dark'>
                    Enviar
                </Button>
        </div>
    )
}
