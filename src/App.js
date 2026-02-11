// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx"
import Hero from "./components/Hero/Hero.jsx";
// import Card from "./components/Card/Card.jsx";
import Section from "./components/Section/Section.jsx"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section title="Top Albums" />
      <Section title="New Albums" />
      {/* <header className="App-header">
        
      </header> */}
    </div>
  );
}

export default App;
