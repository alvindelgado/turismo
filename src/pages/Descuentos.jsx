import React from 'react'
import {Pagina}from "../components/Pagina"
import{tarjetas} from "../Api/index"
function Descuentos() {
  return (
    <div className='descuentos'>
        <Pagina list={tarjetas}/>
    </div>
  )
}

export {Descuentos}