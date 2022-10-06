// import { MongoMemoryServer } from 'mongodb-memory-server'
// import mongoose from 'mongoose'
import {jest} from '@jest/globals';
const {MongoMemoryServer} = require('mongodb-memory-server')
const mongoose = require('mongoose')
const {app} = require('../app.js')

let mongo

// run this following code before each test's run
beforeAll( async () => {
    // mock the database
    const mongo = MongoMemoryServer.create()
    const mongoUri = await(await (mongo)).getUri();
    await mongoose.connect(mongoUri, {});
})


//  run before each test's run
beforeEach( async ()=>{
    // clear the data and stored in each collections
    jest.clearAllMocks();
    const collections = await mongoose.connection.db.collections()
    for(let collection of collections){
        await collection.deleteMany({})
    }

})



// run after every test finished
afterAll(async () => {

    await mongoose.connection.close();
    if (mongo) {
      await mongo.stop();
    }

  });
