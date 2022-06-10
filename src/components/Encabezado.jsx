import React from 'react'
import '../styles/Encabezado.css'
import logo from '../assets/logo.png'
import barras from '../assets/barras.png'
import primero from '../assets/primero.png'
function Encabezado() {
  return (
   
    <div className='Tarjeta1'>
    <div className='logo'>
      <img src={logo} alt="logo" />
      </div>
    <div className='span'>
    <span>PROMOCIONES</span>
    </div>
    <div className='barras'>
    <img src={barras} alt="barras" />
    </div>
    <div className='ciudad'>
    <img src={primero} alt="primero" />
    </div>   
  </div>
  )
}

export { Encabezado }