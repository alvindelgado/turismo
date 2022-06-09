import React from 'react'
import{BrowserRouter,Routes,Route,NavLink, Navigate} from "react-router-dom"
import { Home } from '../pages/Home'
import { Cupones } from '../pages/Cupones'
import{Segundatarjeta}from "../pages/Segundatarjeta"
import{Terceratarjeta}from"../pages/Terceratarjeta"
import{Destinos}from"../pages/Destinos"
import{PLogin}from"../pages/PLogin"

function Navegacion() {
  return (
      <BrowserRouter>
      <nav className='nav'>
          <ul>
                <li>
                    <NavLink to='/login' className={({ isActive })=> isActive ? "nav-active" : ""}>
                    LOGIN
                    </NavLink>
                </li>
              <li>
                    <NavLink to='/home' className={({ isActive })=> isActive ? "nav-active" : ""}>
                    HOME
                    </NavLink>
              </li>
              <li>
                    <NavLink to='/about' className={({ isActive })=> isActive ? "nav-active" : ""}>
                    ABOUT US
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
            <Route path='/*' element={<Navigate to="/home" replace/>}/>
        </Routes>
      </BrowserRouter>
   
  )
}

export {Navegacion}