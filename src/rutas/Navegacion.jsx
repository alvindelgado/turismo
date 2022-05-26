import React from 'react'
import{BrowserRouter,Routes,Route,NavLink, Navigate} from "react-router-dom"
import { Home } from '../pages/Home'
import { Descuentos } from '../pages/Descuentos'
import {Pagina} from "../components/Pagina"
function Navegacion() {
  return (
      <BrowserRouter>
      <nav>
          <ul>
                <li>
                    <NavLink to='/home' className={({ isActive })=> isActive ? "nav-active" : ""}>
                    HOME
                    </NavLink>
                </li>
              <li>
                    <NavLink to='/descuentos' className={({ isActive })=> isActive ? "nav-active" : ""}>
                    DISCOUNTS
                    </NavLink>
              </li>
              <li>
                    <NavLink to='/viajes' className={({ isActive })=> isActive ? "nav-active" : ""}>
                    TRAVELS
                    </NavLink>
              </li>
          </ul>
      </nav>
        <Routes>
            <Route path='home' element={<Home/>}/>
            <Route path='descuentos' element={<Descuentos/>}/>
            <Route path='/*' element={<Navigate to="/home" replace/>}/>
        </Routes>
      </BrowserRouter>
   
  )
}

export {Navegacion}