import React from 'react'
import "../styles/Card_head.css"
function Card_head(props) {
    const imge=props.imge

  return (
    <div className='Card_head'>
<img src={imge} alt="" />
    </div>
  )
}

export {Card_head} 