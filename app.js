import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import { rateLimit } from 'express-rate-limit';
import helmet from 'helmet';

import { errorHandlerMiddle } from './middlewares/error-handler.js'
// import the router from the routes folder
import { LoginRouter } from './routes/Auth/login.js'
import { SignupRouter } from './routes/Auth/signup.js'
import { SurveryRouter } from './routes/Survey/survey.js'
import { passwordResetRouter } from './routes/Auth/passwordReset.js'
import { updateUserRouter } from './routes/Auth/updateUser.js'

// run the router
const app = express()

/**
 * asic rate-limiting middleware for Express.
 * Use to limit repeated requests to public APIs and/or endpoints such as password reset
 */
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max:100,
    standardHeaders: true,
    legacyHeaders: false,
})


app.use(cors())
app.use(express.json());
app.use(limiter);
// app.use(helmet({
//     contentSecurityPolicy: {
//         directives: {
//             "frame-ancestors": ["'self'", "*.googleapis.com/"],
//             frameSrc: ["'self'", "*.google.com/"],
//             childSrc: ["'self'", "*.google.com/"]
//         }
//     },
//     crossOriginEmbedderPolicy: false
// }));

app.use(LoginRouter);
app.use(SignupRouter);
app.use(SurveryRouter);
app.use(passwordResetRouter);
app.use(updateUserRouter);
app.use(errorHandlerMiddle)

//For deployment only


export {app}
