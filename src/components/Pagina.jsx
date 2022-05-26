import React from 'react'
import {Productcontainer} from "./Productcontainer"
import "../styles/Pagina.css"
function Pagina(props) {
    const list=props.list
  return (
    <div className='pagina'>
        {list.map((cartas)=><Productcontainer 
        key={cartas.key}
        title={cartas.title}
        imge={cartas.imge} 
        dias={cartas.dias}
        descuento={cartas.descuento}
        producto={cartas.producto}

        />)}
        
    </div>
  )
}

export {Pagina}