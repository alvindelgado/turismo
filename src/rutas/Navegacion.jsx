import React from 'react'
import{BrowserRouter,Routes,Route,NavLink, Navigate} from "react-router-dom"
import { Home } from '../pages/Home'
import { Cupones } from '../pages/Cupones'
import{Segundatarjeta}from "../pages/Segundatarjeta"
import{Terceratarjeta}from"../pages/Terceratarjeta"
import{Destinos}from"../pages/Destinos"
import{PLogin}from"../pages/PLogin"
import{Ubicacion}from"../pages/Ubicacion"
import{Paquetefamiliar} from "../pages/Paquetefamiliar"
import{Promocion2x1} from "../pages/Promocion2x1"
import{Viajebumerang} from "../pages/Viajebumerang"
import{Propietarios}from "../pages/Propietarios"
import{Pagos}from "../pages/Pagos"
// import{Mapsview}from "../pages/Mapsview"
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
              {/* <li>
                     <NavLink to='/view' className={({ isActive })=> isActive ? "nav-active" : ""}>
                      UBICACION DE NUESTROS DESTINOS
                    </NavLink> 
              </li> */}
                <li>
                    <NavLink to='/ubicacion' className={({ isActive })=> isActive ? "nav-active" : ""}>
                    UBIQUENOS
                    </NavLink>
                </li>
              
              <li>
                    <NavLink to='propietarios' className={({ isActive })=> isActive ? "nav-active" : ""}>
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
            <Route path='promocion2x1' element={<Promocion2x1/>}/>
            <Route path='paquetefamiliar' element={<Paquetefamiliar/>}/>
            <Route path='viajebumerang' element={<Viajebumerang/>}/>
            <Route path='propietarios' element={<Propietarios/>}/>
            {/* <Route path='view' element={<Mapsview/>}/> */}
            <Route path='pagos' element={<Pagos/>}/>
            
            <Route path='/*' element={<Navigate to="/home" replace/>}/>
        </Routes>
      </BrowserRouter>
   
  )
}

export {Navegacion}