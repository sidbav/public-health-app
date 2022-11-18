import {
    GET_SURVEYS_SUCCESS
} from  './types.js'



import axios from 'axios';

const token = localStorage.getItem('token');
    const authFetch = axios.create({
        baseURL: '/api/v1'
    })

    authFetch.interceptors.request.use(
        (config) => {
          config.headers.common['Authorization'] = `Bearer ${token}`
          return config
        },
        (error)=>{
          return Promise.reject(error)
        }

      )

    authFetch.interceptors.response.use(
        (response)=>{
            return response;
        },
        (error) => {
            return Promise.reject(error)
          }


    )


export const getAllSurveys = (FormData) => async (dispatch) => {

    try {
        const response = await authFetch.get('/surveys');
        const { surveyReturn } = response.data;
        dispatch({
            type: GET_SURVEYS_SUCCESS,
            payload:{
                surveyReturn
            }

        })
    } catch (error) {
        console.log(error)
    }



}
