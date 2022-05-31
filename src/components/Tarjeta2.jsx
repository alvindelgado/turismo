import React from 'react'
import fondo from '../assets/fondo.png'
import '../style/Tarjeta2.css'

function Tarjeta2() {
  return (
    <div className='Tarjeta2'>
        <img src={fondo} alt="fondo" />
        <div className='contenido'>
            <div className='inic'>
            <span>LA PAZ - BOLIVIA</span>
            </div>
            <div className='cent'>
            <p>Vive experencias inolvidables</p>
            </div>
        <button>INICIO</button>
        </div>

    </div>
  )
}

export {Tarjeta2} 