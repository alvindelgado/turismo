import React from 'react'
import '../styles/Botton.css'
import travel from '../images/travel.jpg'
import des from '../images/des.jpg'
import cupon from '../images/cupon.jpg'
function Botton() {
  return (
    <div className='Botton'>
        <div className='Prom'>
            <span className='primertitulo'> Promociones</span>
            <img className='travel' src= {travel} alt="travel" />
        </div>
        <div className='Des'>
            <span className='ti2'>Destinos</span>
            <img className='destino' src={des} alt="destinos" />
        </div>
        <div className='Cup'>
            <span className='ti3'>Cupones</span>
            <img className='cupones' src={cupon} alt="logouno" />
        </div>
    </div>
  )
}

export {Botton}