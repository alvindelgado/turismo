import React from 'react'
import {tarjetas}from"../Api/index1"
import{Pagina}from"../components/Pagina"
function Cupones() {
  return (
    <div className='Cupones'>
        <Pagina list={tarjetas}/>
    </div>
  )
}

export {Cupones}