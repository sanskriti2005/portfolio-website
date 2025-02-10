import React, { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineWebAsset } from "react-icons/md";
import evershade from "../assets/evershade.png";
import "./styles/Projects.css";

export const Projects = () => {
  return (
    <div className="projects-section">
      <div className="project-title">Projects</div>
      <div className="project1">
        <img src={evershade} alt="evershade-homepage" className="proj1-img" />
        <div>
          <h1>EverShade</h1>
          <div className="btns">
            <a href="https://github.com/sanskriti2005/ever-shade">
              <FaGithub />
            </a>
            <a href="https://sanskriti2005.github.io/ever-shade/">
              <MdOutlineWebAsset />
            </a>
          </div>
        </div>
      </div>
      <div className="project2">
        <img src={evershade} alt="evershade-homepage" className="proj1-img" />
        <div>
          <h1>Anzone</h1>
          <div className="btns">
            <a href="https://github.com/sanskriti2005/ever-shade">
              <FaGithub />
            </a>
            <a href="https://sanskriti2005.github.io/ever-shade/">
              <MdOutlineWebAsset />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
