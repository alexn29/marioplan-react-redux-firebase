import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider, useSelector } from 'react-redux';
import firebase from 'firebase/app';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

import store from './application/store/store';
import { rrfConfig } from './application/config/fbConfig';

const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance
}

const AuthIsLoaded = ({ children }) => {
	
	const { auth } = useSelector(state => state.firebase)
	
	if (!isLoaded(auth)) {
		return (
			<div className="progress">
				<div className="indeterminate"></div>
			</div>
		)
	}

	return children
}

ReactDOM.render(
	<React.Fragment>
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<AuthIsLoaded>
					<App />
				</AuthIsLoaded>
			</ReactReduxFirebaseProvider>
		</Provider>
	</React.Fragment>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
