import React from "react";
import { withRouter } from "react-router-dom";
import "./Projects.css";
import projects from "../projects.json";

const Projects = () => {
  return (
    <div className="content-wrapper" id="projects">
      <span className="title-text">Projects I worked on</span>
      <div className="projects-wrapper">
        {projects.map(project => {
          return (
            <div className="project-wrapper" key={project.id}>
              <span className="date">{project.beginDate}</span>
              <div className="image-wrapper">
                <img className="image" src={project.coverImage} alt="prjImg" />
              </div>
              <br />
              <h3>{project.name}</h3>
              <p>{project.shortDescription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withRouter(Projects);
