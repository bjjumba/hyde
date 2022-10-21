import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Products from './components/Projects'
import Team from './components/Team'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <>
        <NavBar/>
        <About/>
        {/* <Home/> */}
        <Products/>
        <Team/>
        <Footer/>
    </>
  );
}

export default App;
