import React from 'react'

function Navbar() {
  return (
    <div style={{ backgroundColor: "transparent", position: "fixed", top: 0, width: "100vw",zIndex: 1000 }}>
        <div style={{padding: "15px", color:"white",display:"flex",justifyContent: "space-between"}}>
            <div style ={{justifyContent: "left", marginLeft: "2%",}}>
                <a style={{ textDecoration: "none", fontSize: "4.3rem"}}>LM.</a>
            </div>
            <div style={{ display: "flex", gap: "12%", paddingLeft: "8%", paddingRight: "4%", justifyContent: "flex-end", alignItems: "center", fontSize:"2.4rem"}}>
                <a href="#about" style={{ textDecoration: "none", color: "white" }}>About</a>
                <a href="#experience" style={{ textDecoration: "none", color: "white" }}>Experience</a>
                <a href="#projects" style={{ textDecoration: "none", color: "white" }}>Projects</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar;