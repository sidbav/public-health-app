import mongoose from "mongoose";

// create a token model which will have an expiry time of about 1 hour

const tokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
        expires: 3600, // this is the expire time
    },
});

export default mongoose.model("Token", tokenSchema);
