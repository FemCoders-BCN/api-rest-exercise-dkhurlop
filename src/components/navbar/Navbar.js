import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='nav'>
        <Link to={'/'}>Home</Link>
        <Link to={'/list'}>Lista de Objetos</Link>
        <Link to={'/image'}>Imagen por ID</Link>
        <Link to={'/grayscale'}>Imágen aleatoria en escala de grises</Link>
        <Link to={'/favorites'}>CRUD de Favoritos</Link>
    </nav>
  )
}

export default Navbar