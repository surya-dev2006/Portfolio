import React, { useContext } from "react";
import Navbar from "./Navbar.jsx";
import DarkContext from "./DarkContext.jsx";
import { useNavigate } from "react-router-dom";

import iam from "./assets/my1.png"
const Home = () => {
  const navigate = useNavigate();
  const { dark, setDark ,page} = useContext(DarkContext);
   function windowloc(){
    window.location.href="https://github.com/surya-dev2006";
   }
   function mailto(){
    window.location.href = "mailto:suryasubramani20062006@gmail.com"
   }
  return (
    <div
      className="home"
      style={dark?{background:"white",color:"black"}:{background:"black",color:"white"}}
    >
      <div className="">
      
     { page?<Navbar />:null}
      </div>
      <div className="h-fix">
      <div className="set-pi">
        <img src={iam} alt="" className="main-img" />
      </div>
      <div className="set-pb">
        <div className="set-p">
         
        
        <div className="main-name d-flex align-items-center ">
          
          <p className="d-flex align-items-baseline gap-2"><p className="sm">I'm</p>Surya</p>
          <div className="d-flex gap-2">
            <button onClick={windowloc}  className="bkb"  style={dark?{color:"black"}:{color:"white"}}><i class="bi bi-github"></i></button>
            <button onClick={mailto} className="bkb" style={dark?{color:"black"}:{color:"white"}}><i className="bk bi-envelope-at"></i></button>
            <a href="https://www.linkedin.com/in/surya-s-47a851375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="bkb" style={dark?{color:"black"}:{color:"white"}}><i class="bi bi-linkedin"></i></a>
          </div>
          </div>
          

        </div>
        <div>
          <p className="main-para">
            I am a passionate and detail-oriented developer with a strong intrest in building user-friendly and responsive web 
            applications. I enjoy turning ideas into practical solutions using modern technologies and continously improving my skills through hands-on-projects.
            
          </p>
          <p className="main-para">
             i am a quick learner, adaptable to new tools, and motivated to grow as a professional  while contributing positively to a learn and delivering meaningful digital experiences
          </p>
        </div>
        <div>
                 {  !page?null: <button className="aboutme-btn" onClick={()=>navigate("/about")} style={dark?{color:"black",border:"2px solid blueviolet"}:{color:"white",border:"2px solid blueviolet"}}>About</button>
                 }
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
