import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {

    const { firebase } = useSelector(state => state);
    const { auth } = firebase;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />

    return (
        <nav className="red darken-3">
            <div className="nav-wrapper container">
                <Link to="/" className="brand-logo left">MarioPlan</Link>
                { links }
            </div>
        </nav>
    )
}

export default Navbar
