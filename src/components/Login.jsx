import React, { useState } from "react";
import '../styles/Login.css'
import Title from "./login/Title/Title";
import Label from "./login/Label/Label";
import Input from "./login/Input/Input";
import imagen1 from '../assets/usuarios.png';
import{Link} from "react-router-dom";

const Login = () => {

    const [user, setUser] = useState('');
    const [password, setpassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    function handlechange(name, value) {
        if (name === 'usuario') {
            setUser(value)
        } else {
            if (value.length < 6) {
                setPasswordError(true);
            } else {
                setPasswordError(false);
                setpassword(value)
            }
        }
    };

    function handleSubmit() {
        let account = { user, password }
        if (account) {
            console.log('account: ', account)
        }
    }


    return ( 
        <div className = "login-container" >
        <Title text = "¡Bienvenido!" />
        <img src = { imagen1 }alt = "" />
        <Label text = "Usuario" />
        <Input attribute = {
            {
                id: 'Usuario',
                name: 'Usuario',
                type: 'text',
                placeholder: 'Ingrese su usuario'

            }
        }
        handlechange = { handlechange }
        /> <Label text = "Contraseña" />
        <Input attribute = {
            {
                id: 'Contraseña',
                name: 'Contraseña',
                type: 'password',
                placeholder: 'Ingrese su contaseña'

            }
        }
        handlechange = { handlechange }
        param = { passwordError }
        />
        <Link to="/Segunda">
        <button className="ingre" onClick = { handleSubmit } >
        Ingresar </button>
        </Link>
        
        

        </div>
    )

};
export {Login};