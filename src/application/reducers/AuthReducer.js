import * as types from '../types';

const initState = {
    authError: ''
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                authError: ''
            }

        case types.LOGIN_ERROR:
            return {
                ...state,
                authError: action.payload.message
            }

        case types.SIGNOUT_SUCCESS:
            return state;

        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                authError: ''
            }

        case types.SIGNUP_ERROR:
            return {
                ...state,
                authError: action.payload.message
            }

        default:
            return state;
    }
}

export default AuthReducer;