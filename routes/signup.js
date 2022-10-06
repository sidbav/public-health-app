
import express from 'express'
// import database Model
import User from '../models/User.js'
import dotenv from 'dotenv'
dotenv.config()

// controller for sign up
const router = express.Router();
router.post('/api/v1/auth/signup', async (req,res)=>{

    const {email, password, lastName, firstName, phoneNumber, dob} = req.body

    //check database for availability
    /**
     * if already exists, throw error and message "account already exists"
     * else create new user and add info to database
    */

    //adding to database
    const user = await User.create({ email, password, lastName, firstName, phoneNumber, dob} );
    await user.save()

    res.status(201).send( {email, password, lastName, firstName, phoneNumber, dob});
    console.log("here");
})


export {router as SignupRouter}

// setup the router
