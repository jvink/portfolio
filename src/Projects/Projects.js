import React, { Component } from 'react';
import './Projects.css';
import projects from './projects.json';

//https://drive.google.com/uc?export=view&id={fileId}

class Projects extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <span className="title-text">Some projects I worked on</span>
                <div className="projects-wrapper">
                    {projects.map((project) => {
                        return (
                            <div className="wrapper">
                                <img className="image" src={project.coverImage}/>
                                <b>{project.name}</b>
                                <p>{project.shortDescription}</p>
                                <button className="button-reversed">Read more</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Projects;