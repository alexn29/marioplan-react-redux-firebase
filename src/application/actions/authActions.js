import * as types from '../types';

export const signIn = (credentials) => async (dispatch, getState, { getFirebase, getFirestore }) => {
    
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
    )
    .then( () => {
        dispatch({ type: types.LOGIN_SUCCESS })
    })
    .catch( error => {
        dispatch({ type: types.LOGIN_ERROR, payload: error })
    })
}

export const signOut = () => async (dispatch, getState, { getFirebase, getFirestore }) => {

    const firebase = getFirebase();

    firebase.auth().signOut()
    .then( () => {
        dispatch({ type: types.SIGNOUT_SUCCESS })
    })
    .catch( error => {
        dispatch({ type: types.SIGNOUT_ERROR })
    })
}

export const signUp = (newUser) => async (dispatch, getState, { getFirebase, getFirestore }) => {

    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
    )
    .then( (res) => {
        return firestore.collection('users').doc(res.user.uid).set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: `${newUser.firstName[0]}${newUser.lastName[0]}`
        })
    })
    .then( () => {
        dispatch({ type: types.SIGNUP_SUCCESS })
    })
    .catch( error => {
        dispatch({ type: types.SIGNUP_ERROR, payload: error })
    })
}