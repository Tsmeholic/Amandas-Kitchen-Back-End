import * as mongoose from 'mongoose';

export const AmandasKitchenSchema = new mongoose.Schema({
    dateAdded: Date,
    ingredients: String,
    recipeName: String,
    timeToCook: String,
    instructions: String,
});