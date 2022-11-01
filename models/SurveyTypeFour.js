import mongoose from "mongoose";
 
 const SurveyTypeFourSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true,
        unique: true,

    },

    grade: {
        type: String,
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
    quesiton1: {
         type: String,
        
     },
     quesiton2: {
         type: String,
     },
     quesiton3:{
         type: String,

     },
 
     quesiton4: {
         type: String,

     },
 
     quesiton5: {
         type: String,

     },
 
     quesiton6: {
         type: String,

     },
     quesiton7: {
        type: String,

     },
     quesiton8: {
        type: String,

    },
    quesiton9: {
        type: String,

    },

 
 },
 {
     toJSON:{
         transform (doc,ret){
             delete ret.__v
         }
     }
 })
 
 
 
 
 export default mongoose.model('SurveyTypeFour',SurveyTypeFourSchema);
