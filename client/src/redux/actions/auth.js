import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SHOW_ERROR,
    CLEAR_ERROR
} from './types.js'

import axios from 'axios';

const addUserToLocalStorage = ({user, token}) => {
    localStorage.setItem('user' , JSON.stringify(user));
    localStorage.setItem('token',token)
}

const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
}


export const login = (formData) => async (dispatch) => {
    const {email , password} = formData
    try{

        const response = await axios.post('/api/v1/auth/login',{
            email,
            password
        })

        const {user , token } = response.data;

        dispatch({
            type:LOGIN_SUCCESS,
            payload:{
                user,
                token,
            }
        })
        addUserToLocalStorage({user, token});


    }catch(error){
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.msg
        });
        dispatch(clearError());
    }



}


export const register = (formData) => async (dispatch) => {
    try {
        const {firstName, lastName,dob,password,email,phoneNumber} = formData
        const response = await axios.post('/api/v1/auth/signup',{
            firstName,
            lastName,
            dob,
            password,
            email ,
            phoneNumber
          })

        const {user,token} = response.data;

        dispatch({
            type: REGISTER_SUCCESS,
            payload: {
                user,
                token
            }
        })



        // add token to the local storage.
        addUserToLocalStorage({user, token});


    }catch(error){
        dispatch({
            type:REGISTER_FAIL,
            payload: error.response.data.msg
        })
        // clear the error
        dispatch(clearError())
    }
}

export const logout = () => async (dispatch)=> {
    removeUserFromLocalStorage()
    dispatch({
        type:LOGOUT
    })

}


export const clearError = () => async (dispatch)  => {
    setTimeout(()=>{
        dispatch({type:CLEAR_ERROR})
    },3000)


}
