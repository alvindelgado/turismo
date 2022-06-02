import React from 'react'
import "../styles/Card_footer.css"
function Card_footer(props) {
    const salida=props.salida
    const viaje=props.viaje
    const costo=props.costo
  return (
    <div className='Card_footer'>
       <p>{ `Dias de salida - ${salida}`}</p>
        <p>{`Duracion de viaje - ${viaje}`} </p>
        <p>{`costo - ${costo}`}</p>
        <div className='carta_boton'>
        <button>RESERVAR VIAJE</button>  
        </div>
        

    </div>
  )
}

export {Card_footer}