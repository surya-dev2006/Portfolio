import React from 'react'
import Navbar from './Navbar'
import { useContext } from 'react'
import DarkContext from './DarkContext'
import { useNavigate } from 'react-router-dom'
import "./index.css"
const About = () => {
  const navigate = useNavigate();
        const {dark,setDark,page} = useContext(DarkContext)
  return (
      
    <div className='about' style={dark?{background:"white",color:"black"}:{background:"black",color:"white"}}>
       { page?<Navbar/>:null}
        <div className='ab-t'>
        <div className='ab-top'>
        <div className='abd'>
          <div className='Ab-box start'>
                <p className='title'><b>Higher Secondary</b></p>
                <p className='pp'><b>BioMaths</b><br /><b>09-05-2025 to 02-06-2025</b></p>
               
                <p><b>Specialisation in Mathematics</b></p>
                <p>Sri Brahadambal Government Higher Secondary School</p>

          </div>
          <div className='Ab-box end'>
                <p className='title'><b>Internship</b></p>
                <p className='pp'><b>Techmind Infotech</b><br /><b>2022-2023</b></p>
               
                <p><b>candy shop management system using advance python</b></p>
                <p></p>

          </div>
                    <div className='Ab-box start'>
                <p className='title'><b>NPTEL</b></p>
                <p className='pp'><b>Python for datascience</b><br /><b></b></p>
               
                <p><b>certified in nptel with the percentage of 75</b></p>
                <p></p>

          </div>
          <div className='Ab-box end'>
                <p className='title'><b>UnderGraduate</b></p>
                <p className='pp'><b>BCA</b><br /><b>2023-2026</b></p>
               
                <p><b>Specislization in computer science</b></p>
                <p>JJCollege of Arts and Science</p>

          </div>
          </div>
          </div>
           <div>
            {!page?
            null:
          <button className="aboutme-btn" onClick={()=>navigate("/Skills")} style={dark?{color:"black",border:"2px solid blueviolet"}:{color:"white",border:"2px solid blueviolet"}}>Skills</button>
             } </div>
        </div>
    </div>
  )
}

export default About