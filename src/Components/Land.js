import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";
import TypeWriter from "./Animations/TypeWriter";

function Land() {
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);
  
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(
          BIRDS({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x0,
            color1: 0xA259FF,
            color2: 0xffffff,
            colorMode: "lerpGradient",
            birdSize: 0.50,
            separation: 100.00,
            alignment: 100.00,
            cohesion: 85.00,
            quantity:4
          })
        );
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }, [vantaEffect]);

    return (

        <div ref={vantaRef} style={{height: "100vh",width:"100vw", color: "white", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <a style={{ fontSize: "5.2rem", color: "white" }}> Hi, I'm <span style={{ color: "#A259FF" }}>Lakshay</span></a>
            <a style={{fontSize: "2.4rem"}}><TypeWriter/></a>
            <button style={{ backgroundColor: "#A259FF", color: "white", fontSize: "1.5rem", padding: "12px 24px",
                border: "none", borderRadius: "8px", cursor: "pointer", marginTop: "20px", transition: "background-color 0.3s ease", fontFamily:"Roboto Slab, serif" }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#8A2BE2"} onMouseOut={(e) => e.target.style.backgroundColor = "#A259FF"}>
                Learn more
            </button>
        </div>
    );
  }

export default Land