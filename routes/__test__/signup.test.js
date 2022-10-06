import { response } from "express";
import request from 'supertest'
import { app } from "../../app.js";


it('successfully signup' ,async () => {
    return request(app)
    .post('/api/v1/auth/signup')
    .send({
        "email":"yeyu23233@gmail.com",
        "password":"comeesfefefes",
         "lastName" : "haa",
         "firstName" : "hha",
         "phoneNumber":"12345",
         "dob" : "2019-07-04T13:33:03.969Z"
    }).expect(201);
})

// test for invalid email

it('returns a 400 with an invalid email',async () => {
    return request(app)
    .post('/api/v1/auth/signup')
    .send({
        "email":"yeyu232gmail.com",
        "password":"comeesfefefes",
        "lastName" : "haa",
         "firstName" : "hha",
         "phoneNumber":"12345",
         "dob" : "2019-07-04T13:33:03.969Z"
    })
    .expect(400);
})


// if user has already existed in our database
it('check if user has already signup before', async ()=>{
    await request(app)
    .post('/api/v1/auth/signup')
    .send({
        "email":"yeyu232@gmail.com",
        "password":"comeesfefefes",
        "lastName" : "haa",
         "firstName" : "hha",
         "phoneNumber":"12345",
         "dob" : "2019-07-04T13:33:03.969Z"
    }).expect(201)

    await request(app)
    .post('/api/v1/auth/signup')
    .send({
        "email":"yeyu232@gmail.com",
        "password":"comeesfefefes",
        "lastName" : "haa",
         "firstName" : "hha",
         "phoneNumber":"12345",
         "dob" : "2019-07-04T13:33:03.969Z"
    }).expect(400)


})

