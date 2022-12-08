import mongoose from "mongoose";
import jsonwebtoken from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({
    email: {
        require: [true, 'Please provide a email'],
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        require: [true, 'Please provide a password'],
        minlength: 6,
    },
    lastName:{
        type: String,
        require: true,
    },

    firstName: {
        type: String,
        require: true,
    },

    dob: {
        type: Date,
        required: true,
        trim: true
    },

    phoneNumber: {
        type: String,
        requried: true
    },

    address:{
        type: String,
        trim: true,
        require: false,
        default: "my address"
    },

    city:{
        type: String,
        trim: true,
        require: false,
        default: "my city"
    },

    country:{
        type: String,
        trim: true,
        require: false,
        default: "my country"
    },

    zipcode:{
        type: String,
        trim : true,
        requrie: false,
        default: "my zip code"
    }




},
{
    toJSON:{
        transform (doc,ret){
            delete ret.__v
        }
    }
})

// build method for user model
UserSchema.methods.createJWT = function () {
    return jsonwebtoken.sign({userId: this._id} , process.env.JWT_SECRET,{expiresIn: '1d'})
}



export default mongoose.model('User',UserSchema);
