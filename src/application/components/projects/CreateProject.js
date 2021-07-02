import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createProject } from '../../actions/ProjectActions';

const CreateProject = (props) => {

    const [form, setForm] = useState({
        title: '',
        content: '',
    });

    const { firebase } = useSelector(state => state);
    const { auth } = firebase;

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(createProject(form));
        props.history.push('/')
    }

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.id] : e.target.value
        })
    }

    if (!auth.uid) return <Redirect to="/signin" />

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white z-depth-1">
                <h5 className="grey-text text-darken-3">Create new project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={form.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        value={form.content}
                        onChange={handleChange}
                        className="materialize-textarea"></textarea>
                </div>
                <div className="input-field">
                    <button type="submit" className="btn red darken-3 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateProject
