import express from 'express'
// import database Model

import SurveyTypeOne from '../../models/SurveyTypeOne.js'
import SurveyTypeFour from '../../models/SurveyTypeFour.js'
import auth from './middlewares/auth.js';


// controller for survey
const router = express.Router();
router.post('/api/v1/survey',auth,async (req,res) =>{
    var score = 0
    var surveyResult = ''
    const surveyDate = new Date();
    const dateOrder = surveyDate.getTime();



    const { type } = req.body.result
    const { userId } = req.user;
    const createdBy = userId;



// household-food survey
    if(type == 'household-food'){
        const {HH1, HH2, HH3,HH4,AD1,AD1a,AD2,AD3,AD4,AD5,AD5a,CH1,CH2,CH3,CH4,CH5,CH5a,CH6,CH7,bool_children} = req.body.result

        for(var itemname in req.body.result){

            if(req.body.result[itemname] == 'item1' )  {
                score++
            console.log(score)
            }
            if(req.body.result[itemname] == 'item2' && ['HH2','HH3','HH4','AD1a','AD5a','CH1','CH2','CH3','CH5a'].includes(itemname))  {
                score++
            console.log(score)
            }
        }

        if(bool_children == false) {
            switch(true){
                case (score==0) :
                surveyResult = 'High food security'
                        break
                case (score==1 || score==2) :
                surveyResult = 'Marginal food security'
                        break
                case (score >= 3 && score <= 5):
                surveyResult = 'Low food security'
                        break
                case(score >= 6 && score <= 10):
                surveyResult = 'Very low food security'
                        break
            }
        }
        else {
            switch(true){
                case (score==0) :
                surveyResult = 'High food security'
                        break
                case (score==1 || score==2) :
                surveyResult = 'Marginal food security'
                        break
                case (score >= 3 && score <= 7):
                surveyResult = 'Low food security'
                        break
                case(score >= 8 && score <= 18):
                surveyResult = 'Very low food security'
                        break
            }
        }

        const survey = await SurveyTypeOne.create({createdBy,surveyResult,score,surveyDate, dateOrder,type,HH2, HH3,HH4,AD1,AD1a,AD2,AD3,AD4,AD5,AD5a,CH1,CH2,CH3,CH4,CH5,CH5a,CH6,CH7} );
        await survey.save()

    }

// childrenfood survey
    if(type == 'children-food'){
    const {question1, question2, question3,question4,question5,question6,question7,question8,question9} = req.body.result
    for(var itemname in req.body.result){
        if(req.body.result[itemname] == 'item1' || req.body.result[itemname] == 'item2')  {
            score++
        console.log(score)
        }
    }

    switch(true){
        case (score==0) :
        surveyResult = 'High food security'
                break
        case (score==1) :
        surveyResult = 'Marginal food security'
                break
        case (score >= 2 && score <= 5):
        surveyResult = 'Low food security'
                break
        case(score >= 6 && score <= 9):
        surveyResult = 'Very low food security'
                break
    }

    const survey = await SurveyTypeFour.create({createdBy,surveyResult,score,surveyDate, dateOrder,type,question1, question2, question3,question4,question5,question6,question7,question8,question9} );
    await survey.save()

}
    res.status(201).json(
        {
            surveyResult:{
            score,
            surveyResult
        } });

}


)
export {router as SurveryRouter}
