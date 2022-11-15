import express from 'express'
import 'express-async-errors'
import cors from 'cors'

import { errorHandlerMiddle } from './middlewares/error-handler.js'
// import the router from the routes folder
import { LoginRouter } from './routes/Auth/login.js'
import { SignupRouter } from './routes/Auth/signup.js'
import { SurveryRouter } from './routes/Survey/survey.js'
import { passwordResetRouter } from './routes/Auth/passwordReset.js'

import auth from './middlewares/auth.js'
// run the router
const app = express()
app.use(cors())
app.use(express.json());
app.use(LoginRouter);
app.use(SignupRouter);
app.use(SurveryRouter);
app.use(passwordResetRouter);
app.use(errorHandlerMiddle)

//For deployment only


export {app}
