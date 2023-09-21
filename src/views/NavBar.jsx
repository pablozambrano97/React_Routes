import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const url="/React_Routes";
  return (
    <Navbar bg="dark" variant="dark" className="d-flex justify-content-between navbar navbar-expand-lg ">
        <Container className='d-flex gap-3 justify-content-start'>
            <Link to={url} className='text-decoration-none text-white'>
                🏠 Home
            </Link>
            <Link to={`${url}/Contact`} className='text-decoration-none text-white'>
                📗 Contacto
            </Link>
        </Container>
        <Link to={url} className='text-decoration-none text-white'>
        <Navbar.Brand>Happy Cake 🍰</Navbar.Brand>
        </Link>
      </Navbar>
  )
}


