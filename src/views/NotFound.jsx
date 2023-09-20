import React from 'react'
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='d-flex flex-column align-items-center gap-3 pt-5'>
      <h2>Página no encontrada</h2>
      <Image src="https://amoradulce.com/wp-content/uploads/2022/09/91630428-748a-48b4-80aa-7d76d5a0c38f.jpg" thumbnail style={{width:'16rem'}}/>
      <Button className='bottonColor ' type="submit" variant='dark'>
        <Link to='/' className='text-decoration-none text-white'>Volver al home.</Link> 
      </Button>
    </div>
  )
}
