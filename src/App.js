
// import React from 'react';
// import './App.css';

// function App() {
  
  // }
  
  // export default App;
  import React from 'react';
  import Hero from './components/Hero';
  import Navbar from "./components/Navbar";
  import About from "./components/About";
import Team from './components/Team';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <About />
      <Team/>
    </div>
  );
}

