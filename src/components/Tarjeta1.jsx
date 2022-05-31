import React from 'react'
import "../style/Tarjeta1.css"
import logo from '../assets/logo.png'
import barras from'../assets/barras.png'
import Imagen1 from '../assets/Imagen1.png'

function Tarjeta1() {
  return (
    <div className='Tarjeta1'>
      <div className='logo'>
        <img src={logo} alt="logo" />
        </div>
      <div className='span'>
      <span>TOURS IDA Y VUELTA</span>
      </div>
      <div className='barras'>
      <img src={barras} alt="barras" />
      </div>
      <div className='ciudad'>
      <img src={Imagen1} alt="imagen1" />
      </div>   
    </div>
  )
}

export{Tarjeta1}