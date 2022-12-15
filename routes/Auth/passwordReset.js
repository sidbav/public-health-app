import express from 'express'
import User from '../../models/User.js'
import dotenv from 'dotenv'
import ValidationError from '../../errors/validation-error.js'
import { StatusCodes } from 'http-status-codes'
import crypto from 'crypto';
import bcryptjs from 'bcryptjs';

dotenv.config()

const router = express.Router();
const clientURL = process.env.CLIENT_URL;

router.post('/api/v1/auth/passwordReset', async (req, res) => {
    const { email, newPassword } = req.body;
    // check if user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
        throw new ValidationError("Email does not exist. Please register first");
    }


    // // check if new password is the same as the old password

    const isMatch = await bcryptjs.compare(newPassword, user.password);
    if (isMatch) {
        throw new ValidationError("New password cannot be the same as old password");
    }


    // // change the password in the database and send the response
    const hashedNewPassword = await bcryptjs.hash(newPassword, 10);
    await User.updateOne({ email }, { password: hashedNewPassword });
    res.status(StatusCodes.OK).json({ success: true });
});
    export {router as passwordResetRouter};
