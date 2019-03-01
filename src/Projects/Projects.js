import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <span className="title-text">Some projects I worked on</span>
                <div>
                    {this.getProjects}
                </div>
            </div>
        );
    }

    getProjects() {
        let projects = [];

        return projects;
    }
}

export default Projects;