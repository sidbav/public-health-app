import express from 'express'
// import database Model
import User from '../../models/User.js'
import dotenv from 'dotenv'
dotenv.config()
import validator from 'validator'
import ValidationError from '../../errors/validation-error.js'
import { StatusCodes } from 'http-status-codes'
const Token  = import('../../models/Token.js');
const crypto = import('crypto');
import bcryptjs from 'bcryptjs'
const sendEmail = import("../../utils/email/sendEmail.cjs");
import JWT from "jsonwebtoken";

const clientURL = process.env.CLIENT_URL;

// check if the user exists in the database before sending the reset password link
const router = express.Router();

router.post('/api/v1/auth/passwordReset', async (req, res) => {
    const { email, newPassword } = req.body;

    // check if user exists in the database
    const user = await User.findOne({ email });

    if (!user) {
        throw new ValidationError("Email does not exist. Please register first");
    }

    // // get reset token
    // let resettoken = Token.findOne({ userId: user._id });
    // if (resettoken) await resettoken.deleteOne();

    // // generate token
    // const resetToken = crypto.randomBytes(20).toString("hex");
    // const hashedToken = await bcryptjs.hash(resetToken, 10);

    // // save token to database
    // await new Token({
    //     userId: user._id,
    //     token: hashedToken,
    //     createdAt: Date.now(),
    // }).save();

    // create reset url
    //const resetUrl = `${clientURL}/passwordReset/${resetToken}`;

    // const message = "You are receiving this email because you (or someone else) has requested the reset of a password. Please make a PUT request to: \n\n ${resetUrl}";

    // try{ sendEmail(
    //     user.email,
    //     message,
    //     {
    //         name: user.name,
    //         subject: "Password Reset",
    //     },
    //     "./template/requestResetPassword.handlebars"
    // );} catch (error) {
    //     console.log(error);
    //     user.resetPasswordToken = undefined;
    //     user.resetPasswordExpire = undefined;

    //     await user.save({ validateBeforeSave: false });

    //     throw new ValidationError("Email could not be sent");
    // }

    // res.status(StatusCodes.OK).json({ success: true, data: "Email sent" });


    // check if the new password is the same as the old password
    const isMatch = await bcryptjs.compare(newPassword, user.password);
    if (isMatch) {
        throw new ValidationError("New password cannot be the same as old password");
    }


    // change the password in the database
    const hashedNewPassword = await bcryptjs.hash(newPassword, 10);
    await User.updateOne({ email }, { password: hashedNewPassword });

    // send the response
    res.status(StatusCodes.OK).json({ success: true, data: "Password changed successfully" });
    });

    export {router as passwordResetRouter}

