import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import Land from './Pages/Land';
import About from './Pages/About';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <Navbar/>
        <Land/>
        <About/>
        <Education/>
        <Experience/>
        <Projects/>
    </div>
  );
}

export default App;
