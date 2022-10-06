import express from 'express'
import 'express-async-errors'

// import the router from the routes folder
import { signInRouter } from './routes/loginin.js'


// run the router
const app = express()
app.use(express.json());
app.use(signInRouter);


export {app}
