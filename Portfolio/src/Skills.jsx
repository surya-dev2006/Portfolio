import React, { useContext, useState, useRef, useLayoutEffect } from "react";
import Navbar from "./Navbar.jsx";
import DarkContext from "./DarkContext.jsx";
import { useNavigate } from "react-router-dom";
import Projects from "./Projects.jsx";
import Radio from "./Components/Radio.jsx";
import { gsap } from "gsap";

const Skills = () => {
  const navigate = useNavigate();
  const { dark ,page } = useContext(DarkContext);
  const [on, setOn] = useState(true);

  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bi", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="skills"
      style={
        dark
          ?  { background: "white", color: "black" }:{ background: "black", color: "white" }
          
      }
    >
      {!page?null:<Navbar />}
      

      <p className="Skill-t">
        <b>let's explore my skills</b>
      </p>

      {on ? (
        <div className="ms-2">
          <i
            className="bi bi-toggle-on"
            onClick={() => setOn(false)}
          />
          <Radio />
        </div>
      ) : (
        <i
          className="bi bi-toggle-off ms-2"
          onClick={() => setOn(true)}
        />
      )}

           {  !page?null: <button className="aboutme-btn" onClick={()=>navigate("/Projects")} style={dark?{color:"black",border:"2px solid blueviolet"}:{color:"white",border:"2px solid blueviolet"}}>Projects</button>
                 }
    </div>
  );
};

export default Skills;
