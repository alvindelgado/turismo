import React from 'react'
import '../styles/Botton.css'
import travel from '../assets/travel.png'
import des from '../assets/des.png'
import cupon from '../assets/cupon.jpg'

function Botton2() {
  return (
    
    <div className='Botton'>
        <div className='Prom'>
            <span className='primertitulo'> Paquete familiar</span>
            <img className='travel' src= {travel} alt="travel" />
        </div>
        <div className='Des'>
            <span className='ti2'>Promocion 2×1</span>
            <img className='destino' src={des} alt="destinos" />
        </div>
        <div className='Cup'>
            <span className='ti3'>Viaje Boomerang</span>
            <img className='cupones' src={cupon} alt="logouno" />
        </div>
    </div>
    
  )
}

export {Botton2 }