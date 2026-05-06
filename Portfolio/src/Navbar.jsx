import React, { useContext, useState } from 'react'
import Menulist from './Components/Menulist'
import DarkContext from './DarkContext'

const Navbar = () => {
  
  const {dark,setDark,page , navbar , setNavbar} = useContext(DarkContext)

  return (
    <div  className='nav-bar' style={dark?{background:"white",color:"black"}:{background:"black",color:"white"}}>
        <div className='d-flex '>
      
            <div>
              <div>
                <i className="bi bi-list" onClick={()=>setNavbar(!navbar)}></i>
                {navbar?<Menulist/>:null}
              </div>
              <div></div>

            </div>
                  <div>
              

            </div>
        </div>
    </div>
  )
}

export default Navbar