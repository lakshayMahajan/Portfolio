import React from 'react'

function About() {
    return (
<div style={{
    height: "85vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",  // Aligns content to the top
    alignItems: "center",  // Centers content horizontally
    backgroundColor: "#060816",
    paddingTop: "5vh" // Adds space from the top
}}>
    <a style={{ fontSize: "2rem", color: "rgb(170, 166, 195)" }}>Introduction</a>
    <a style={{ fontSize: "6.5rem", fontWeight: "bold", marginTop: ".15rem",color:"white",marginBottom:"1rem"}}>Overview.</a>

        <div style={{display: "flex", flexDirection:"row",marginRight:"16rem", marginLeft:"16rem",marginTop:"5rem"}}>
            <div style={{display: "flex",flexDirection:"column",marginRight:"8rem",alignItems:"center", gap:"1.6rem"}}>
                <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQE6wS1beCOcXQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696275382751?e=1746662400&v=beta&t=LuisUM-W_rSusv_1LYKz0UgVrxFfYByJBvxJcuGgbYE" 
                style={{
                    height: "30vh",
                    width: "30vh",
                    borderRadius: "50%",
                    boxShadow: "0px 0px 15px 5px #A259FF",
                    objectFit: "cover",
                }} 
                />
                <div style={{ display: "flex",  gap: "1.6rem"}}>
                    <button style={{
                        marginTop: "1rem",
                        width: "12rem",
                        padding: "1rem",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        color: "white",
                        background: "linear-gradient(to right, #00c6ff, #0072ff)",
                        transition: "0.3s",
                        boxShadow: "0px 4px 10px rgba(138, 43, 226, 0.5)",
                        height:"3.8rem"
                        }} onClick={() => window.location.href = "https://github.com/lakshayMahajan"}>
                            Github</button>

                        <button style={{
                        marginTop: "1rem",
                        width: "12rem",
                        padding: "0.8rem",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        color: "white",
                        background: "linear-gradient(to right, #FF7E5F, #FEB47B)",
                        transition: "0.3s",
                        boxShadow: "0px 4px 10px rgba(162, 89, 255, 0.5)"
                        }} onClick={() => window.location.href = "https://www.linkedin.com/in/lakshaymahajan006/"}>
                            LinkedIn</button>
                    </div>

                    <button style={{
                    width: "12rem",
                    padding: "0.8rem",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    color: "white",
                    background: "linear-gradient(to right, #ff7e5f, #feb47b)",
                    transition: "0.3s",
                    boxShadow: "0px 4px 10px rgba(75, 0, 130, 0.5)",
                    height:"3.8rem"
                    }} onClick={() => window.open("/resume.pdf", "_blank")}>Resume</button>
                </div>
            <div style={{ display: "flex", gap: "4rem", color: "white", flexDirection:"column", color: "rgb(170, 166, 195)",fontSize: "1.8rem", marginLeft:".6rem"}}>
                <a>👨‍💻 I'm a Software Engineer with 2 years of experience in full-stack development, specializing in building scalable web applications and debugging tools.</a>
                <a>🎓 Freshman currently pursuing Computer Science, Mathematics, and 
                    Finance at Purdue University.</a>
                    <a>🛠 I specialize in full-stack development and AI-powered analytics, building debugging portals, intelligent scheduling tools, and scalable solutions that drive real-world impact.</a>
                    <a>🔧 Passionate about automation and optimization, I tackle complex problems with innovative, efficient solutions.</a>
                <a>💡 Always exploring, I love staying ahead of the curve.</a>
            </div>
        </div>
      </div>
    );
  }

export default About