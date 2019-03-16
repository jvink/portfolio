import React, { Component } from 'react';
import projects from '../projects.json';
import './ProjectDetail.css';

class ProjectDetail extends Component {
    render() {
        if (this.props.match.params.projectid) {
            let currentProject = projects.filter((project) => project.id.toString() === this.props.match.params.projectid.toString())[0];
            return (
                <div className="content-wrapper">
                    <div className="project-detail">
                        <div className="project-detail-header">
                            <div className="project-detail-header-image-wrapper">
                                <img className="project-detail-header-image" src={currentProject.coverImage} alt="prjImg"/>
                            </div>
                            <span className="project-detail-header-title">
                                {currentProject.name}
                            </span>
                            <span className="project-detail-header-date">
                                {currentProject.beginDate}
                            </span>
                        </div>
                        <div className="project-detail-content">
                            <h3>Product Owner: <i>{currentProject.productOwner}</i></h3>
                            <p>{currentProject.longDescription}</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <span>404</span>;
        }
    }
}

export default ProjectDetail;