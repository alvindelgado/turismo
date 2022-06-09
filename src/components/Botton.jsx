import React from 'react'
import '../styles/Botton.css'
import travel from '../assets/travel.jpg'
import des from '../assets/des.jpg'
import cupon from '../assets/cupon.jpg'
import{Link} from "react-router-dom"
function Botton() {
  return (
    <div className='Botton'>
      <Link to="/Tercera">
      <div className='Prom'>
            <span className='primertitulo'> Promociones</span>
            <img className='travel' src= {travel} alt="travel" />
        </div>
      </Link>
      <Link to="/Destinos" >
      <div className='Des'>
            <span className='ti2'>Destinos</span>
            <img className='destino' src={des} alt="destinos" />
        </div>
      </Link>
     
        <Link to="/Cupones">
        <div className='Cup'>
            <span className='ti3'>Cupones</span>
            <img className='cupones' src={cupon} alt="logouno" />
        </div>

        </Link>
        
    </div>
  )
}

export {Botton}