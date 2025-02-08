import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {

  return (
    <>
      <Navbar />
      <div>
      <section id="home" className="section">
        <h1>Home</h1>
      </section>

      <section id="about-me" className="section">
        <h1>About Me</h1>
      </section>

      <section id="projects" className="section">
        <h1>Projects</h1>
      </section>

      <section id="experience" className="section">
        <h1>Experience</h1>
      </section>

      <section id="contact" className="section">
        <h1>Contact</h1>
      </section>
      </div>
    </>
  )
}

export default App
