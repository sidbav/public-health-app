import mongoose from "mongoose";

 const SurveyTypeFourSchema = new mongoose.Schema({

    createdBy: {
        type: mongoose.Types.ObjectId,
        ref : 'User',

    },
    type: {
        type: String,
        required: true,

    },

    score: {
        type: String,
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
    question1: {
         type: Array,


     },
     question2: {
        type: Array,
     },
     question3:{
        type: Array,

     },

     question4: {
        type: Array,

     },

     question5: {
        type: Array,

     },

     question6: {
        type: Array,

     },
     question7: {
        type: Array,

     },
     question8: {
        type: Array,

    },
    question9: {
        type: Array,

    },


 })

 export default mongoose.model('SurveyTypeFour',SurveyTypeFourSchema);
