import React, {useContext} from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import { Acerca } from '../components/Acerca'
import { Articulo } from '../components/Articulo'
import { Contacto } from '../components/Contacto'
import { Inicio } from '../components/Inicio'
import { Login } from '../components/Login'
import { PruebaContext } from '../context/PruebaContext'


export const AppRouter = () => {
    const {user} = useContext(PruebaContext)

  return (
    <BrowserRouter>
        <header className='header'>
                <nav>
                    <div id="logo">
                        <h2>Aprendiendo React Context</h2>
                    </div>
                    <ul>
                        <li>
                            <NavLink to="/">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/articulos">Articulos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/acerca-de">Acerca de</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacto">Contacto</NavLink>
                        </li>
                        <li>
                            {user.nombre !== null ? (
                                <NavLink to="/login">Identificate</NavLink>
                            ):(
                                <NavLink to="/inicio">{user.nombre}</NavLink>
                            )
                            }
                        </li>
                    </ul>
                </nav>
        </header>

        <section className='content'>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/inicio' element={<Inicio/>}/>
                <Route path='/articulos' element={<Articulo/>}/>
                <Route path='/acerca-de' element={<Acerca/>}/>
                <Route path='/contacto' element={<Contacto/>}/>
                <Route path='/login' element={<Login/>}/>

                <Route path='*' element={<div><h1>ERROR NO EXISTE LA PAGINA</h1></div>}/>
            </Routes>
        </section>
    </BrowserRouter>
  )
}
