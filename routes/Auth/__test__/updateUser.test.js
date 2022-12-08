import request from 'supertest';
import isTaxID from 'validator/lib/isTaxID';
import { app } from '../../../app.js';



it('successfully update' ,async () => {
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


    // await request(app)
    // .patch('/api/v1/auth/updateUser')
    // .send({
    //     "email":"new@gmail.com",
    //     "lastName":"newLastname",
    //     "firstName" : "newfirstName",
    //     "city":"College Station",
    //     "zipcode" :"77840",
    //     "country" : "United States"
    // }).expect(201);



})


