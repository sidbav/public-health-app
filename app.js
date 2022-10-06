import express from 'express'
import 'express-async-errors'

// import the router from the routes folder
import { LoginRouter } from './routes/login.js'

//
// run the router
const app = express()
app.use(express.json());
app.use(LoginRouter);
//


export {app}
