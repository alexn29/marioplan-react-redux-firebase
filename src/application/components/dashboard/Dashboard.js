import React from 'react'
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router';

import ProjectList from '../projects/ProjectList';

const Dashboard = () => {

    useFirestoreConnect({ collection: 'projects', orderBy: ['createdAt', 'desc'] });

    const { firebase, firestore } = useSelector(state => state);
    const { auth } = firebase;
    const { projects } = firestore.ordered;

    if (!auth.uid) return <Redirect to="/signin" />

    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m12 l7">
                    <ProjectList projects={projects} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard