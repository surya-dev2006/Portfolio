import React, { useContext, useLayoutEffect, useRef, useState } from 'react'
import "../index.css"
import DarkContext from '../DarkContext'
import { useNavigate } from 'react-router-dom'
import { gsap } from "gsap";
const Menulist = () => {
    const navigate = useNavigate();

     const {page,setPage ,dark,setDark , navbar , setNavbar} = useContext(DarkContext)
    
  return (
    <div  className='menu-list d-flex justify-content-center align-items-center position-fixed w-100' style={!dark?{backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"}}>
        <div className='inner-menu'>
            
            <div className='menu'onClick={()=>(navigate('/'),
    setNavbar(false))}>
                <i className="bi bi-house "></i>
                <span className='p-menu'>Home</span>
             
            </div>
           <div className='menu  ' onClick={()=>(navigate('/about'),
    setNavbar(false))}>
                <i class="bi bi-person"></i>
                <span className='p-menu'>About</span>
            </div>
          <div className='menu  ' onClick={()=>(navigate('/skills'),
    setNavbar(false))}>
                <i class="bi bi-code-square"></i>
                <span className='p-menu'>Skills</span>
            </div>
         <div className='menu' onClick={()=>(navigate('/projects'),
    setNavbar(false))}>
                <i class="bi bi-file-earmark"></i>
                <span className='p-menu'>Projects</span>
            </div>
           <div className='menu  'onClick={()=>(navigate('/contact'),
    setNavbar(false))}>
                <i class="bi bi-envelope"></i>
                <span className='p-menu'>Contact</span>
            </div>
            <div className='menu '>
                <button onClick={()=>setDark(!dark)} className='menu-btn1'>{!dark?<i className="bb bi-toggle-on" ></i>:<i className="bb1 bi-toggle-off"></i>}</button>
                <span className='p-menub '>theme</span>
            </div>
            <div className='menu '>
                <button onClick={()=>setPage(!page)} className='menu-btn1'>{page?<i style={!dark?{color:"white"}:{color:"black"}}  className="bb bi-toggle-on" ></i>:<i style={!dark?{color:"white"}:{color:"black"}}  className="bb1 bi-toggle-off"></i>}</button>
                <span className='p-menub '>page</span>
            </div>
        </div>
    </div>
  )
}

export default Menulist