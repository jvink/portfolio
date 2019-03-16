import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Projects.css';
import projects from '../projects.json';

//https://drive.google.com/uc?export=view&id={fileId}

class Projects extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <span className="title-text">Some projects I worked on</span>
                <div className="projects-wrapper">
                    {projects.map((project) => {
                        return (
                            <div className="project-wrapper" key={project.id}>
                                <span className="date">{project.beginDate}</span>
                                <div className="image-wrapper">
                                    <img className="image" src={project.coverImage} alt="prjImg"/>
                                </div>
                                <br/>
                                <h3>{project.name}</h3>
                                <p>{project.shortDescription}</p>
                                <div className="actions">
                                    <button onClick={() => this.goToProject(project.id)}>Read more</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    goToProject(id) {
        this.props.history.push("projects/" + id);
    }
}

export default withRouter(Projects);