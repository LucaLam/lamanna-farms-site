import React from 'react';
import './App.scss';

import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import About from "./pages/About/about";
import Shop from "./pages/Shop/Shop";
import Form from './pages/Form/Form';


function App() {
  return (
    <div className="container">
      <Header/>
      <Hero />
      <About />
      <Shop/>
      <Form />
    </div>
  );
}

export default App;
