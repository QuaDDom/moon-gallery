import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        maxlength: 15,
        minlength: 5,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        maxlength: 30,
        minlength: 12
    }
});

export default model('User', UserSchema)