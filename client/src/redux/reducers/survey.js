import
{
    GET_SURVEYS_SUCCESS

} from '../actions/types.js'

const initialState = {
    surveys: [],
    loading: true
}


function surveyReducer (state = initialState , action){

    const {type , payload} = action;
    switch(type){
        case GET_SURVEYS_SUCCESS:
            return{
                ...state,
                surveys: payload.surveyReturn,
                loading: false
            }

        default:
            return state

    }
}

export default surveyReducer;


