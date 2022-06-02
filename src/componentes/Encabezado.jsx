import React from 'react'
import '../styles/Encabezado.css'
import logo from '../images/logo.png'
import barras from '../images/barras.png'
import primero from '../images/primero.png'
function Encabezado() {
  return (
   
    <div className='Tarjeta1'>
    <div className='logo'>
      <img src={logo} alt="logo" />
      </div>
    <div className='span'>
    <span>TURS IDA Y VUELTA</span>
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

export default Encabezado