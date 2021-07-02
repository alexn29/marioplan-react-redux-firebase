import React from 'react'
import moment from 'moment';

const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-2 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title red-text">{ project.title }</span>
                <small>Posted by {project.authorFirstName} {project.authorLastName}</small><br />
                <small className="grey-text">{ moment(project.createdAt.toDate()).calendar() }</small>
            </div>
        </div>
    )
}

export default ProjectSummary