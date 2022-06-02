import React from 'react'
import  "../styles/Card_section.css"
function Card_section(props) {
    const title=props.title
    const descripcion=props.descripcion

  return (
    <div className='Card_section'>
        <p>{title}</p>
        <p> {descripcion}</p>
    </div>
  )
}

export { Card_section} 