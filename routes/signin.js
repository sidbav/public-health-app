
import express from 'express'
// import database Model
import User from '../models/User.js'
import dotenv from 'dotenv'
dotenv.config()

const router = express.Router();
router.post('/api/v1/auth/login', async (req,res)=>{
    const {email, password, lastName, firstName} = req.body

    const user = await User.create({ email, password, lastName, firstName} );
    await user.save()

    res.status(201).send( {email, password, lastName, firstName});
    console.log("here");
})


export {router as signInRouter}

// setup the router
