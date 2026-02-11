import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx"
import Hero from "./components/Hero/Hero.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <header className="App-header">
        
      </header> */}
    </div>
  );
}

export default App;
