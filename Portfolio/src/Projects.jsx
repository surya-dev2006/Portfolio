import React from 'react'
import Navbar from './Navbar'
import DarkContext from './DarkContext'
import { useContext } from 'react'
import ProjectComponent from './Components/ProjectComponent';
import Contact from './Contact';
import { useNavigate } from 'react-router-dom';
const Projects = () => {
  const navigate = useNavigate();
  const {dark,setDark,page} = useContext(DarkContext)
  return (
    <div   className='project'    style={page?{marginTop: "0px"}:{marginTop: "200px"}
      }>
      {!page?null:<Navbar/>}
      <div style={!dark ?  { background: "black", color: "white" }:{ background: "white", color: "black" }}>
        <h2>Projects & Internships</h2>
       <ProjectComponent/>
      </div>
  <div>
            {!page?
            null:
          <button className="aboutme-btn" onClick={()=>navigate("/contact")} style={dark?{color:"black",border:"2px solid blueviolet"}:{color:"white",border:"2px solid blueviolet"}}>Contact</button>
             } </div>
    </div>
  )
}

export default Projects