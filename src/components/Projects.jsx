import React, { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineWebAsset } from "react-icons/md";
import evershade from "../assets/evershade.png";
import "./styles/Projects.css";
import anzone from '../assets/anzone.png'

export const Projects = () => {
  return (
    <div className="projects-section">
      <div className="project-title">Projects</div>
      <div className="project1">
        <img src={evershade} alt="evershade-homepage" className="proj1-img" />
        <div>
          <h1>EverShade</h1>
          <p>EverShade is a digital platform revolutionizing the beauty industry by combining sustainability and inclusivity.</p>
          <div className="btns">
            <a href="https://github.com/sanskriti2005/ever-shade" target="_blank">
              <FaGithub size={25}/>
            </a>
            <a href="https://sanskriti2005.github.io/ever-shade/" target="_blank">
              <MdOutlineWebAsset size={25}/>
            </a>
          </div>
        </div>
      </div>
      <div className="project2">
        <img src={anzone} alt="anzone" className="proj2-img" />
        <div>
          <h1>Anzone</h1>
          <div className="btns">
            <a href="https://github.com/sanskriti2005/Codess-Hackathon" target="_blank">
              <FaGithub size={25}/>
            </a>
            <a href="https://youtu.be/tS8Ls8-YFEA" target="_blank">
              <MdOutlineWebAsset size={25}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
