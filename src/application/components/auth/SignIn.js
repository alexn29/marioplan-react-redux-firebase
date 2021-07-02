import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { signIn } from '../../actions/authActions';

const SignIn = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const dispatch = useDispatch();
    
    const { auth, firebase } = useSelector(state => state);
    const { authError } = auth;
    
    const authFirebase = firebase.auth;

    const handleSubmit = e => {
        e.preventDefault();
        
        dispatch(signIn(form));
        
        setForm({
            email: '',
            password: ''
        });
    }

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.id] : e.target.value
        })
    }

    if (authFirebase.uid) return <Redirect to="/" />

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white z-depth-2">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <button className="btn red darken-3 z-depth-0">Login</button>
                </div>
                <div className="red-text center">
                    { authError ? <p>{authError}</p> : null }
                </div>
            </form>
        </div>
    )
}

export default SignIn
