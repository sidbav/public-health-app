import express from 'express';
import dotenv  from 'dotenv'
import connectDB from './db/connect.js'
import 'express-async-errors';
import cors from 'cors'
app.use(cors())
import { dirname } from 'path';
import { fileURLToPath } from 'url';
//
import {app} from './app.js'
import path from 'path'

//dotenv config
dotenv.config();


// In the dev environment
// the server listens on 4000 instead of 5001
const port = process.env.PORT || 5001


const start = async () => {
    await connectDB(process.env.MONGO_URL);
}


console.log('test')



app.listen(port , ()=>{
    console.log(`Server is listening on port ${port} ...`)

})

start();
