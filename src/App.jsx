import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Element } from 'react-scroll';
import AboutMe from './components/AboutMe';
import { Projects } from './components/Projects';


function App() {

  return (
    <>
      <Navbar />
      <div className='container' id="container">
      <Element name="home">
          <section id="home" className="section">
            <Home/>
          </section>
        </Element>

        <Element name="about-me">
          <section id="about-me" className="section">
            <AboutMe/>
          </section>
        </Element>

        <Element name="projects">
          <section id="projects" className="section">
            <Projects/>
          </section>
        </Element>

        <Element name="contact">
          <section id="contact" className="section">
            <h1>Contact</h1>
          </section>
        </Element>
        </div>
    </>
  )
}

export default App
