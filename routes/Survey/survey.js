import express from 'express'
// import database Model

import SurveyTypeOne from '../../models/SurveyTypeOne.js'
import SurveyTypeFour from '../../models/SurveyTypeFour.js'



// controller for survey
const router = express.Router();
router.post('/api/v1/survey',async (req,res) =>{

    const {type} = req.body.result
    if(type == 'children-food'){
    const {question1, question2, question3,question4,question5,question6,question7,question8,question9} = req.body.result
    var score = 0
    var surveyResult = ''
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

    console.log(surveyResult)
    // const Question1 = question1.toString()
    const surveyDate = new Date();
    const dateOrder = surveyDate.getTime();
    console.log(surveyDate)
    console.log(dateOrder)
    const survey = await SurveyTypeFour.create({surveyResult,score,surveyDate, dateOrder,type,question1, question2, question3,question4,question5,question6,question7,question8,question9} );
    await survey.save()
    // res.status(201).send("Hody");

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