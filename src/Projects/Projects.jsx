import React, { useState } from "react";
import "./Projects.css";
import Lightbox from "lightbox-react";
import "lightbox-react/style.css";
import projects from "../projects.json";

const Projects = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [screenshots, setScreenshots] = useState([]);

  return (
    <div id="projects">
      <h4 className="projects-title">Projects I worked on</h4>
      <div className="projects-wrapper">
        {projects.map(project => {
          return (
            <div className="project" key={project.id}>
              <span className="date">{project.beginDate}</span>
              <h3>{project.name}</h3>
              <img
                src={project.screenshots[0]}
                alt="sc"
                className="project-screenshot"
                onClick={() => {
                  setScreenshots(project.screenshots);
                  setOpen(true);
                }}
              />
              <p>{project.shortDescription}</p>
              <span
                className="show-screenshots"
                onClick={() => {
                  setScreenshots(project.screenshots);
                  setOpen(true);
                }}
              >
                Show screenshots
              </span>
            </div>
          );
        })}
      </div>
      {open && (
        <Lightbox
          mainSrc={screenshots[photoIndex]}
          nextSrc={screenshots[(photoIndex + 1) % screenshots.length]}
          prevSrc={
            screenshots[
              (photoIndex + screenshots.length - 1) % screenshots.length
            ]
          }
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + screenshots.length - 1) % screenshots.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % screenshots.length)
          }
        />
      )}
    </div>
  );
};

export default Projects;
