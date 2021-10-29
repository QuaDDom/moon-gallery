import { Schema, model } from 'mongoose';

const ImageSchema = new Schema({
    key: String,
    title: {
        type: String,
        required: true,
        maxlength: 40,
        minlength: 5
    },
    url: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model('Image', ImageSchema);

