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

    createdBy: {
        type: mongoose.Types.ObjectId,
        ref : 'User',
    },

    type: {
        type: String,
        required: true,

    },

    score: {
        type: Number,
        required: true,

    },

    surveyResult: {
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
         type: Array,

     },
     HH3: {
         type: Array,
     },
     HH4:{
         type: Array,

     },

     AD1: {
         type: Array,

     },

     AD1a: {
         type: Array,

     },

     AD2: {
         type: Array,

     },
     AD3: {
        type: Array,

     },
    AD4: {
        type: Array,

    },
    AD5: {
        type: Array,

    },
    AD5a: {
        type: Array,

    },
    CH1: {
        type: Array,

    },
    CH2: {
        type: Array,

    },
    CH3: {
        type: Array,

    },
    CH4: {
        type: Array,

    },
    CH5: {
        type: Array,

    },
    CH5a: {
        type: Array,

    },
    CH6: {
        type: Array,

    },
    CH7: {
        type: Array,

    }

 },
 )




 export default mongoose.model('SurveyTypeOne',SurveyTypeOneSchema);
