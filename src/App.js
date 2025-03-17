import React from 'react';
import './App.css';
import Navbar from './Pages/Components/Navbar';
import Land from './Pages/Land';
import About from './Pages/About';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div id="land"><Land /></div>
      <div id="about"><About /></div>
      <div id="education"><Education /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
    </div>
  );
}

export default App;
