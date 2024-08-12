import mongoose from 'mongoose';
const fcSchema=new mongoose.Schema({
    category:{
        type: String,
        required: true
    },
    question:{
        type: String,
        required: true
    },
    answer:{
        type: String,
        required: true
    }
});
const Flashcard = mongoose.models.Flashcard||mongoose.model('Flashcard', fcSchema);
export default Flashcard;