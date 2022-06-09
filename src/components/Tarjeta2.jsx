import React from 'react'
import{Link} from "react-router-dom"

import fondo from '../assets/fondo.png'
import '../styles/Tarjeta2.css'

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
            <Link to="/login"> 
               <button>INICIAR SESION</button>
          </Link>
        </div>

    </div>
    
  )
}

export {Tarjeta2} 