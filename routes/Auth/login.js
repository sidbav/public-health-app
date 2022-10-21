
import express from 'express'
// import database Model
import User from '../../models/User.js'
import dotenv from 'dotenv'
dotenv.config()
import validator from 'validator';
import ValidationError from '../../errors/validation-error.js'
import { StatusCodes } from 'http-status-codes';
import bcryptjs from 'bcryptjs';

// controller for sign in
const router = express.Router();
router.post('/api/v1/auth/login', async (req,res)=>{
    const {email, password} = req.body

    // check if user provides a/an email or password
    if (!email || !password) {
        throw new ValidationError('Please provide a/an email or password');
    }

    // check if the format of user's email is correct
    if (!validator.isEmail(email)) {
        throw new ValidationError('Please provide a CORRECT email');
    }

    // check if user has registered
    const user = await User.findOne({email})
    if (!user) {
        throw new ValidationError('User does not exist');
    }

    // check if the hash and password is a match
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
        throw new ValidationError('Password is incorrect');
    }

    // create json webtoken
    const token = user.createJWT();

    // if email and password is a match, then user can sign in
    user.password = undefined
    res.status(StatusCodes.CREATED).json({
        user,
        token
    })


})


export {router as LoginRouter}

// setup the router
