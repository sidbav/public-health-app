// userId: ObjectiD
// surveyType : String
/* answer: String
*/
// date: Date  2012-12-12
// Order: String 20121212


/**
{
    "quesiton1": answer
    "question2" : answer
    "question3" : answer
 }

 */
 import mongoose from "mongoose";
 
 const SurveyTypeOneSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true,
        unique: true,

    },

    grade: {
        type: Number,
        required: true,

    },

    surveyType: {
        type: String,
        required: true,

    },
    dateOrder: {
        type: Number,
        required: true,
        unique: true,
       
    },
    surveyDate: {
        type: Date,
        required: true,
        unique: true,
       
    },

     HH2: {
         type: String,
        
     },
     HH3: {
         type: String,
     },
     HH4:{
         type: String,

     },
 
     AD1: {
         type: String,

     },
 
     AD1a: {
         type: String,

     },
 
     AD2: {
         type: String,

     },
     AD3: {
        type: String,

     },
    AD4: {
        type: String,

    },
    AD5: {
        type: String,

    },
    AD5a: {
        type: String,

    },
    CH1: {
        type: String,

    },
    CH2: {
        type: String,

    },
    CH3: {
        type: String,

    },
    CH4: {
        type: String,

    },
    CH5: {
        type: String,

    },
    CH6: {
        type: String,

    },
    CH7: {
        type: String,

    },
    location: {
        type: String,

    },
    ZIP: {
        type: String,

    }

 
 },
 )
 
 
 
 
 export default mongoose.model('SurveyTypeOne',SurveyTypeOneSchema);
