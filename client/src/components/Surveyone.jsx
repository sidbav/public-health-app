
// import redux related
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import { logout } from '../redux/actions/auth';
import { Model , StylesManager} from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useLocation } from 'react-router-dom'
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import 'survey-react/survey.css';
import { surveyAdultFood , surveyHousehold, surveyChildrenFood} from '../utility/SurveyType';
import 'survey-core/defaultV2.min.css';
import axios from 'axios'
StylesManager.applyTheme("defaultV2");





const surveyType = (type)=>{
  if (type === "household-food"){

    const survey = new Model(surveyHousehold);
    return survey

  }else if(type === "adult-food"){

    const survey = new Model(surveyAdultFood);
    return survey

  }else if(type === "children-food"){

    const survey = new Model(surveyChildrenFood);
    return survey

  }

}


const Surveyone = ({token, logout}) => {

  const navigate = useNavigate()
  const location = useLocation()
  // extract the type of survey
  const { type } = location.state


  // const survey = new Model(surveyJson);
  console.log(type);
  const survey = surveyType(type)
  const surveyComplete = useCallback(
    async (sender) => {
        const result = sender.data
        result.type = type
        // make request over here
        console.log(result);


        const authFetch = axios.create({
            baseURL : '/api/v1/'
        });

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
          (response) => {
            return response
          },
          (error) => {
            if (error.response.status == 401){
                // logout user if
                logout();
                navigate('/profile');



            }
            return Promise.reject(error);
          }


        )

        //const response = await axios.post('/api/v1/survey' , {result})
        const response = await authFetch.post('/survey',{result});



        console.log(response);

    },
  )

  survey.onComplete.add(surveyComplete);
  navigate('/profile');

  return <Survey model={survey} />;
}



Surveyone.propTypes = {
  logout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
      token: state.auth.token,
  }

}


export default connect(mapStateToProps , {logout})(Surveyone)


