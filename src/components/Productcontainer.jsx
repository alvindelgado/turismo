import React from 'react'

import "../styles/Productcontainer.css"

function Productcontainer(props) {
    const title=props.title
    const imge=props.imge
    const dias=props.dias
    const descuento=props.descuento
  return (
    <div className='product-container'>
        <h1>{title}</h1>
            <img src={imge} />
            <h3>{dias}</h3>
            <h1>{descuento}</h1>
            
    </div>
  )
}

export {Productcontainer}