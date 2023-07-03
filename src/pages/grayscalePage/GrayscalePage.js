import React from 'react'
import Navbar from '../../components/navbar/Navbar'

function GrayscalePage() {
  return (
    <main>
        <h2>Aquí estará la imagen aleatoria en escala de grises de la tercera llamada</h2>
        <Navbar/>
        <ul>
            <p>INSTRUCCIONES</p>
            <li>Crea los componentes que necesites para imprimir lo siguiente (siguiendo el ejemplo del componente PictureObject):</li>
            <ol>
                <li>La fotografía (queremos ver la imagen en nuestra app, no queremos la url).</li>
            </ol>
            <li>Has de borrar estas instrucciones cuando lo tengas.</li>
            <li>Los estilos los has de realizar tú misma.</li>
        </ul>
    </main>
  )
}

export default GrayscalePage