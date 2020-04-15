import React, { Component } from 'react'
import './App.scss';

import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import About from "./pages/About/about";
import Shop from "./pages/Shop/Shop";
import Form from './pages/Form/Form';
import Footer from './components/footer/Footer';


export class App extends Component {
  render() {

  return (
    <div className="container">
      <Header/>
      <Hero />
      <About />
      <Shop/>
      <Form />
      <Footer />
    </div>
  );
}

}



export default App;
