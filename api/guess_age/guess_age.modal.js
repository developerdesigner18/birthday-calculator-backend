import mongoose from 'mongoose';
const { Schema } = mongoose

const guess_ageSchema = Schema({
    email: String,
    age: Number,
    month: Number,
    day: Number,
    date: String
})

export const Guess_Age = mongoose.model('guessAge', guess_ageSchema);