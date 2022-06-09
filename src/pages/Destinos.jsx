import React from 'react'
import {Pagina2}from"../components/Pagina2"
import{clon}from"../Api/index2"
function Destinos() {
  return (
    <div className='destinos'>
        <Pagina2 list={clon}/>
    </div>
  )
}

export {Destinos}