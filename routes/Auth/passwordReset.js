import express from 'express'
// import database Model
import User from '../../models/User.js'
import dotenv from 'dotenv'
dotenv.config()
import ValidationError from '../../errors/validation-error.js'
import { StatusCodes } from 'http-status-codes'
import Token from '../../models/Token.js';
import crypto from 'crypto';
import bcryptjs from 'bcryptjs';
import nodemailer from 'nodemailer'
import fs from 'fs'
import handlebars from 'handlebars'
import path from 'path'

const router = express.Router();
const __dirname = path.resolve();

router.post('/api/v1/auth/passwordReset', async (req, res) => {
    const { email } = req.body;

    // check if user exists in the database
    const user = await User.findOne({ email });

    if (!user) {
        throw new ValidationError("Email does not exist. Please register first");
    }

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USERNAME, // your email address
          pass: process.env.EMAIL_PASSWORD, // your password
        },
      });

    const mailOptions = {
        from: 'your email address',
        to: email,
        subject: 'Password Reset Request',
        html: `
        <html >
        <head>
            <meta charset="utf-8">
         </head>
        <body>
            <p><h3>Hi ${user.firstName},</h3></p>
            <p>You requested to reset your password.</p>
            <p> Please, click the link below to reset your password</p>
        </body>
        </html>`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
       console.log(error);
       callback(error);
        } else {
          // do something useful
          res.status(StatusCodes.CREATED).json({
            message: " Reset Email sent",
            });
        }
    });

    // const isMatch = await bcryptjs.compare(newPassword, user.password);
    // if (isMatch) {
    //     throw new ValidationError("New password cannot be the same as old password");
    // }


    // // change the password in the database
    // const hashedNewPassword = await bcryptjs.hash(newPassword, 10);
    // await User.updateOne({ email }, { password: hashedNewPassword });

    // // send the response
    // res.status(StatusCodes.OK).json({ success: true, data: "Password changed successfully" });
    });

    export {router as passwordResetRouter};
