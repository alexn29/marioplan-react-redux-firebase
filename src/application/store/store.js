import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import firebase from 'firebase/app';
import { getFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';

import RootReducer from '../reducers/RootReducer';
import fbConfig from '../config/fbConfig';

const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

const store = createStore(
    RootReducer,
    compose(
        applyMiddleware(...middlewares),
        reduxFirestore(firebase, fbConfig),
    )
)

export default store;