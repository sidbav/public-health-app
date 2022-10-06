import { response } from "express";
import request from 'supertest'
import { app } from "../../app.js";

// describe('here', ()=>{
//     test('efe' , ()=>{

//     })
// })
it('responds with details about the current user' ,async () => {
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
        "email":"yeyu23233@gmail.com",
        "password":"comeesfefefes",
        "lastName" : "haa",
         "firstName" : "hha",
         "phoneNumber":"12345",
         "dob" : "2019-07-04T13:33:03.969Z"
    })
    .expect(400);
})
