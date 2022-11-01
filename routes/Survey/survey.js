import express from 'express'
// import database Model

import dotenv from 'dotenv'
dotenv.config()
import validator from 'validator'
import ValidationError from '../../errors/validation-error.js'
import { StatusCodes } from 'http-status-codes'
import bcryptjs from 'bcryptjs'

// controller for sign up
const router = express.Router();
router.post('/api/v1/survey',async (req,res) =>{
    res.status(201).send("Hody");
})



export {router as SurveryRouter}
