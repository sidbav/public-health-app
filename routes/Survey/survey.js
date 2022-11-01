import express from 'express'
import SurveyTypeOne from '../../models/SurveyTypeOne.js'
import dotenv from 'dotenv'
dotenv.config()

const router = express.Router();

router.post('/api/v1/auth/survey', async (req,res)=>{
    const {surveyType} = req.body
    if(surveyType == '1'){
        const {HH2, HH3, HH4, AD1, AD1a, AD2, AD3, AD4, AD5, AD5a, CH1, CH2, CH3, CH4, CH5, CH6, CH7} = req.body;}
    if(surveyType == '2')
        {const {HH2, HH3, HH4, AD1, AD1a, AD2, AD3, AD4, AD5, AD5a} = req.body}
    if(surveyType == '3')
        {const {HH3, HH4, AD1, AD1a, AD2, AD3} = req.body}
    if(surveyType == '4')
        {const {quesiton1, quesiton2, quesiton3, quesiton4, quesiton5, quesiton6, quesiton7, quesiton8, quesiton9} = req.body}


    // creat date for sorting
    const surveyDate = new Date();
    //const dateOrder = surveyDate.getFullYear + surveyDate.getMonth + surveyDate.getDate
    const dateOrder = getTime();

    // calculate results
    switch(surveyType){
        case '1':
            // calculate surveyone result
            //
            //
            const survey = await SurveyTypeOne.create({userId, grade, surveyType,dateOrder,surveyDate,HH2, HH3, HH4, AD1, AD1a, AD2, AD3, AD4, AD5, AD5a, CH1, CH2, CH3, CH4, CH5, CH6, CH7} );
            await survey.save();
            res.status(200).json(
                {
                    survey:{
                HH2toCH7 : 'result',
                HH2toAD5a_nochild: 'result',
                HH2toAD5a:'result',
                HH3toAD3:'result',
                CH1toCH7:'result'
                 
                } });
        
        case '2':

        case '3':

        case '4':
    }

    console.log(req.body);
    res.send('done');



})
