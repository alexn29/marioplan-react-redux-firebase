import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../actions/authActions'

const SignedInLinks = () => {

    const { profile } = useSelector(state => state.firebase);
    const dispatch = useDispatch();

    return (
        <ul className="right">
            <li><NavLink to="/create-project">New Project</NavLink></li>
            <li><a href="#!" onClick={ () => dispatch(signOut()) }>Log Out</a></li>
            <li>
                <NavLink to="/" className="btn btn-floating amber accent-4 waves-effect waves-light">{profile.initials}</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks
