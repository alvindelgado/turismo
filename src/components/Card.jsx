import React from 'react'
import "../styles/Card.css"
import {Card_head} from "./Card_head"
import {Card_section} from "./Card_section"
import {Card_footer} from "./Card_footer"
function Card(props) {
    const imge=props.imge
    const title=props.title
    const descripcion=props.descripcion
    const salida=props.salida
    const viaje=props.viaje
    const costo=props.costo
  return (
    <div className='Card'>
 <Card_head imge={imge}/>
 <Card_section title={title} descripcion={descripcion}/>
 <Card_footer salida={salida} viaje={viaje} costo={costo} />

    </div>
  )
}

export { Card} 