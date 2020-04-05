import React from 'react';
import './App.scss';

import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import About from "./pages/About/about";


function App() {
  return (
    <div className="container">
      <Header/>
      <Hero />
      <About />
    </div>
  );
}

export default App;
