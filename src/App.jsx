import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom"
import "./App.css"
import logo from "./assets/react.svg"
import globe from "./assets/worldwide.png"
import Landing from "./pages/home.jsx"
import Class11Program from './pages/class-11.jsx'
import Class12Program from './pages/class-12.jsx'


function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Landing/>}/>
            <Route path='/neet/class-11' element={<Class11Program/>}/>
            <Route path='/neet/class-12' element={<Class12Program/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Layout(){
  return (
    <div className='layout'>
      <Header/>
      <div className='content'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  ) 
}


function Header() {
  return (
    <div className='navbar'>
      <NavLink to='/' end className={({isActive}) => isActive ? 'active-link' : ''}>Allen</NavLink>
      <NavLink to='/neet/class-11' className={({isActive}) => isActive ? 'active-link' : ''}>Class-11</NavLink>
      <NavLink to='/neet/class-12' className={({isActive}) => isActive ? 'active-link' : ''}>Class-12</NavLink>
    </div>
  )
}

function Footer(){
  return (
    <div className='footer'>
      Made with love and lots of pressure
    </div>
  )
}


export default App
