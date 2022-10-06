import express from 'express'
import 'express-async-errors'

// import the router from the routes folder
import { LoginRouter } from './routes/login.js'
import { SignupRouter } from './routes/signup.js'
//
// run the router
const app = express()
app.use(express.json());
app.use(LoginRouter);
app.use(SignupRouter);
//


export {app}
