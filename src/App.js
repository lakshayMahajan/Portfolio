import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Land from './Components/Land';
import About from './Components/About';

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <Navbar/>
        <Land/>
        <About/>
    </div>
  );
}

export default App;
