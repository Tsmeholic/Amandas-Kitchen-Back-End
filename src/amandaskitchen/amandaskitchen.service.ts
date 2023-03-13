import { Recipe } from "./interfaces/recipe.interface";
import { AddRecipeDTO } from "./dto/addRecipe.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";

@Injectable()
export class AmandasKitchenService {
    constructor(@InjectModel('Recipe') private readonly recipeModel: Model<Recipe>) {}

    async addRecipe(addRecipeDTO: AddRecipeDTO): Promise<Recipe> {
        const newRecipe = await new this.recipeModel(addRecipeDTO);
        return newRecipe.save();
    }

    async deleteRecipe(recipeID): Promise<any> {
        const deletedRecipe = await this.recipeModel.findByIdAndRemove(recipeID);
        return deletedRecipe;
    }

    async editRecipe(recipeID, addRecipeDTO: AddRecipeDTO): Promise<Recipe>{
        const editedRecipe = await this.recipeModel.findByIdAndUpdate(recipeID, addRecipeDTO, {new: true});
        return editedRecipe
    }
    
    async getRecipe(recipeID): Promise<Recipe>{
        const recipe = await this.recipeModel.findById(recipeID).exec();
        return recipe;
    }

    async getRecipes(): Promise<Recipe[]>{
        const recipes = await this.recipeModel.find().exec();
        return recipes;
    }
}