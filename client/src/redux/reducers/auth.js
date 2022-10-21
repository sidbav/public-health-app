import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT,
    LOGIN_SUCCESS,
    SHOW_ERROR,
    CLEAR_ERROR,
    LOGIN_FAIL
} from '../actions/types.js'


const user = localStorage.getItem('user')
const token = localStorage.getItem('token')

const initialState = {
    user : user ? JSON.parse(user):null,
    token : token,
    isAuthenticated: false,
    errorMessage: '',
    showError:  false
}

function authReducer(state = initialState , action){
    const {type, payload} = action;
    switch(type){
        case REGISTER_SUCCESS:
            return{
                ...state,
                user: payload.user,
                token: payload.token,
                isAuthenticated: true
            }
        case REGISTER_FAIL:
            return {...state,
                    isAuthenticated:false,
                    errorMessage: payload,
                    showError: true
            }

        case LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                errorMessage: payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: payload.user,
                token: payload.token,
                isAuthenticated: true
            }
        case LOGOUT:
            return {
                ...state,
                token:null,
                isAuthenticated:false,
                user: null
            }
        case  CLEAR_ERROR:
            return {
                ...state,
                showError: false,
                errorMessage: ''
            }

        default:
            return state;
    }
}


export default authReducer;
