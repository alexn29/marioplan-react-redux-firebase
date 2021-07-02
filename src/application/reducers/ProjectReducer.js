import * as types from '../types';

const initState = {
    projects: [
        { id: 1, title: 'Help me find peach', content: 'blah blah blah' },
        { id: 2, title: 'Collect all the stars', content: 'blah blah blah' },
        { id: 3, title: 'Egg hunt with Yoshi', content: 'blah blah blah' },
    ]
}

const ProjectReducer = (state = initState, action) => {
    switch (action.type) {
        case types.CREATE_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload]
            }
        default:
            return state;
    }
}

export default ProjectReducer;