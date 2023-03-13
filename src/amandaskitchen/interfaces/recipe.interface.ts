import { Document } from "mongoose";

export interface Recipe extends Document {
    readonly dateAdded: Date,
    readonly ingredients: String,
    readonly recipeName: String,
    readonly timeToCook: String,
    readonly instructions: String,
}