import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Land from './Components/Land';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Land/>
      </header>
    </div>
  );
}

export default App;
