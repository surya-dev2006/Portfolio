import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DarkContext from './DarkContext'
import Home from './Home.jsx'
import Message from './Message.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Contact from './Contact.jsx';
import Projects from './Projects.jsx';
import ProjectComponent from './Components/ProjectComponent.jsx';
import Chat from './Chat.jsx';
import Navbar from './Navbar.jsx';

function App() {
  const [dark, setDark] = useState(false)
const [navbar,setNavbar] = useState(false)
const [page,setPage]= useState(false)
  return (
    <div>
    <BrowserRouter>
    
      <DarkContext.Provider value={{ page,setPage,dark, setDark ,navbar, setNavbar }}>
       { !page?
         <div className='d-flex flex-column gap-5 ' style={!dark?{background:"black"}:{background:"white"}}>
          <div style={{position:"fixed"}}><Navbar/></div>
          <div>
            <Home/>
          </div>
        <div  >
            <About/>
          </div>
          <div className='single-skill vh-100 mt'>
        <Skills/>
          </div>
          <div>
            <Projects/>
          </div>
          <Contact/>
          
          
        </div>:
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/message' element={<Message/>}/>
        </Routes>
      
}
      </DarkContext.Provider>
    </BrowserRouter>

    </div>
  
  )
}

export default App
