
import express from 'express'



// import database Model
import User from '../models/User.js'
import dotenv from 'dotenv'
dotenv.config()

const router = express.Router();
router.post('/api/v1/auth/login', async (req,res)=>{
    res.status(201).send("howdy");
})


export {router as signInRouter}

// setup the router
