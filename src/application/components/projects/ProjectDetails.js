import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router'
import moment from 'moment';

const ProjectDetails = (props) => {

    const { id } = props.match.params;
    useFirestoreConnect([
        {
            collection: 'projects',
            doc: id
        }
    ]);

    const { firebase, firestore } = useSelector(state => state);
    const { auth } = firebase;
    const { data } = firestore;
    const project = data.projects && data.projects[id];

    if (!auth.uid) return <Redirect to="/signin" />

    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-2">
                    <div className="card-content">
                        <div className="card-title red-text">{ project.title }</div>
                        <p>{ project.content }</p>
                        <br />
                        <small>Posted by { `${project.authorFirstName} ${project.authorLastName}`}</small><br />
                        <small className="grey-text">{ moment(project.createdAt.toDate()).calendar() }</small>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return null;
    }
}

export default ProjectDetails
