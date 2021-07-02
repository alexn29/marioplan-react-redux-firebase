import * as types from '../types';

export const createProject = (project) => async (dispatch, getState, { getFirebase } ) => {

    const firestore = getFirebase().firestore();
    const { firebase } = getState();
    const { auth, profile } = firebase;

    firestore.collection('projects').add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: auth.uid,
        createdAt: new Date(),
    }).then(() => {
        
        dispatch({
            type: types.CREATE_PROJECT,
            payload: project
        });

    }).catch((err) => {
        console.error(err)
    })

}