import React from 'react'
import{BrowserRouter,Routes,Route,NavLink, Navigate} from "react-router-dom"
import { Home } from '../pages/Home'
import { Cupones } from '../pages/Cupones'
import{Segundatarjeta}from "../pages/Segundatarjeta"
import{Terceratarjeta}from"../pages/Terceratarjeta"
import{Destinos}from"../pages/Destinos"
import{PLogin}from"../pages/PLogin"
import{Ubicacion}from"../pages/Ubicacion"

function Navegacion() {
  return (
      <BrowserRouter>
      <nav className='nav'>
          <ul>
          <li>
                    <NavLink to='/home' className={({ isActive })=> isActive ? "nav-active" : ""}>
                    PRINCIPAL
                    </NavLink>
              </li>
                <li>
                    <NavLink to='/ubicacion' className={({ isActive })=> isActive ? "nav-active" : ""}>
                    UBIQUENOS
                    </NavLink>
                </li>
              
              <li>
                    <NavLink to='/about' className={({ isActive })=> isActive ? "nav-active" : ""}>
                    PROPIETARIOS

                    </NavLink>
              </li>
          </ul>
      </nav>
        <Routes>
            <Route path='home' element={<Home/>}/>
            <Route path='Cupones' element={<Cupones/>}/>
            <Route path='Segunda' element={<Segundatarjeta/>}/>
            <Route path='Tercera' element={<Terceratarjeta/>}/>
            <Route path='Destinos' element={<Destinos/>}/>
            <Route path='login' element={<PLogin/>}/>
            <Route path='ubicacion' element={<Ubicacion/>}/>
            <Route path='/*' element={<Navigate to="/home" replace/>}/>
        </Routes>
      </BrowserRouter>
   
  )
}

export {Navegacion}