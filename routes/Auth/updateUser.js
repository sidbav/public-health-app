import express from 'express'
import User from '../../models/User.js'
import dotenv from 'dotenv'
dotenv.config()

import auth from '../../middlewares/auth.js'
import { StatusCodes } from 'http-status-codes'
import ValidationError from '../../errors/validation-error.js'


//'/updateUser'
// patch
const router = express.Router();
router.patch('/api/v1/auth/updateUser' ,auth, async (req,res) => {
    const{email , lastName, firstName, city, country, zipcode} = req.body;
    const { userId } = req.user;

    if(!email || !lastName || !firstName){
        throw new ValidationError("Please provide all values");
    }

    const user = await User.findOne({_id: userId});
    user.email     = email;
    user.lastName  = lastName;
    user.firstName = firstName;
    user.city      = city;
    user.zipcode   = zipcode;
    user.country   = country;


    await user.save();

    // create a new token
    const token = user.createJWT();

    res.status(StatusCodes.OK)
    .json({
        user:{
            email: user.email,
            lastName : user.lastName,
            firstName: user.firstName,
            city     : user.city,
            zipcode  : user.zipcode,
            address  : user.address,
            country  : user.country

        },
        token
    })

});



export {router as updateUserRouter}

