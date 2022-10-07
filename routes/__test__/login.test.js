import { response } from "express";
import request from 'supertest'
import { app } from "../../app.js";
import{ StatusCodes} from 'http-status-codes'

it('successfully Login' ,async () => {

    // signup firstly
    await request(app)
    .post('/api/v1/auth/signup')
    .send({
        "email":"yeyu23233@gmail.com",
        "password":"comeesfefefes",
         "lastName" : "haa",
         "firstName" : "hha",
         "phoneNumber":"12345",
         "dob" : "2019-07-04T13:33:03.969Z"
    }).expect(201);


    // login
    await request(app)
    .post('/api/v1/auth/login')
    .send({
        "email":"yeyu23233@gmail.com",
        "password":"comeesfefefes",
    }).expect(201);
})


it('login with incorrect password', async()=> {
    await request(app)
    .post('/api/v1/auth/signup')
    .send({
        "email":"yeyu23233@gmail.com",
        "password":"comeesfefefes",
         "lastName" : "haa",
         "firstName" : "hha",
         "phoneNumber":"12345",
         "dob" : "2019-07-04T13:33:03.969Z"
    }).expect(201);


    // login
    await request(app)
    .post('/api/v1/auth/login')
    .send({
        "email":"yeyu23233@gmail.com",
        "password":"comeesf",
    }).expect(StatusCodes.UNAUTHORIZED);


})



