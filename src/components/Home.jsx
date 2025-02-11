import React from "react";
import img from "../assets/img.jpg";
import './styles/Home.css'

const Home = () => {
  return (
    <>
      <div className="home-section">
        <div>
          <div>
            <h2>Hi there! 👋</h2>
            <h1>I'm Sanskriti </h1>
          </div>
          <div class="typing-container">
            <span class="text">FRONTEND DEVELOPER</span>
          </div>
          <div className="skills">
            <p>Skills</p>
            <p className="skill">HTML</p>
            <p className="skill">JavaScript</p>
            <p className="skill">Python</p>
            <p className="skill">React</p>
            <p className="skill">Redux</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
