import React from "react";
import img from "../assets/img.jpg";
import "./styles/Home.css";

const Home = () => {
  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1N8ucU7KA9IRQoVUyIjb0NNsYNOuxjO4P/view?usp=sharing"
    );
    setTimeout(() => {
      window.open(
        "https://drive.google.com/uc?export=download&id=1N8ucU7KA9IRQoVUyIjb0NNsYNOuxjO4P"
      );
    }, 2000);
  };
  return (
    <>
      <div className="home-section">
        <div>
          <div className="home-image">
            <img src={img} alt="headshot" className="home-img" />
          </div>
          <div>
            <h2>Hi there! 👋</h2>
            <h1>I'm Sanskriti </h1>
            <button className="home-resume-btn" onClick={handleResumeClick}>
              Resume
            </button>
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
