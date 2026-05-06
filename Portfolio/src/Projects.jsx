import React from 'react'
import Navbar from './Navbar'
import DarkContext from './DarkContext'
import { useContext } from 'react'
import ProjectComponent from './Components/ProjectComponent';

const Projects = () => {
  const {dark,setDark,page} = useContext(DarkContext)
  return (
    <div   className='project'    style={
        !dark ?  { background: "black", color: "white" }:{ background: "white", color: "black" }
      }>
      {!page?null:<Navbar/>}
      <div>
        <h2>Projects & Internships</h2>
       <ProjectComponent/>
      </div>

    </div>
  )
}

export default Projects