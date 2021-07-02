import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { signUp } from '../../actions/authActions';

const SignUp = () => {

    const [form, setForm] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    });

    const { firebase, auth } = useSelector(state => state);
    const { authError } = auth;

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(signUp(form));
    }

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.id] : e.target.value
        })
    }

    if (firebase.auth.uid) return <Redirect to="/" />

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white z-depth-2">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
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
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <button className="btn red darken-3 z-depth-0">Sign Up</button>
                </div>
                <div className="red-text center">
                    { authError ? <p>{ authError }</p> : null }
                </div>
            </form>
        </div>
    )
}

export default SignUp
