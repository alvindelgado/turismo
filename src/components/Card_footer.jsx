import React from 'react'
import "../styles/Card_footer.css"
import{Link}from "react-router-dom"
function Card_footer(props) {
    const salida=props.salida
    const viaje=props.viaje
    const costo=props.costo
  return (
    <div className='Card_footer'>
       <p>{ `Dias de salida - ${salida}`}</p>
        <p>{`Duracion de viaje - ${viaje}`} </p>
        <p>{`Costo - ${costo}`}</p>
        <div className='carta_boton'>
          <Link to="/pagos" style={{ textDecoration:"none"}}>
          <button>RESERVAR VIAJE</button>  
          </Link>
        
        </div>
        

    </div>
  )
}

export {Card_footer}