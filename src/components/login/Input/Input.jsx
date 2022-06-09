import React from "react";
import '../Input/Input.css'

const Input = ({attribute,handlechange,param}) =>{
    return(
        <div>
            <input 
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            onChange={(e) => handlechange(e.target.value)}
            className={ param ? 'input-error':'regular-style'}
            />
        </div>
    )
};
export default Input;