
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Element } from 'react-scroll';
import AboutMe from './components/AboutMe';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';


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
            <Contact/>
          </section>
        </Element>
        </div>
    </>
  )
}

export default App
