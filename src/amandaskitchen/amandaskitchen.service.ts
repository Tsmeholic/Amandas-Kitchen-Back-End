import { Recipe } from "./interfaces/recipe.entity";
import { Injectable } from "@nestjs/common";
import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AmandasKitchenService {
    constructor(@InjectRepository(Recipe) private recipeRepository: Repository<Recipe>) {}

    async addRecipe(recipe: Recipe): Promise<Recipe> {
        const newRecipe = await this.recipeRepository.create(recipe);
        return await this.recipeRepository.save(newRecipe);
    }

    async deleteRecipe(recipeID: string): Promise<DeleteResult> {
        return await this.recipeRepository.delete(recipeID);
    }

    async editRecipe(recipeID: string, recipe: Partial<Recipe>): Promise<Recipe>{
        return await this.recipeRepository.save(recipe);
    }
    
    async getRecipe(recipeID: string): Promise<Recipe>{
        return await this.recipeRepository.findOne({
            where: [ {ID : Number('recipeID')}]
        });
    }

    async getRecipes(): Promise<Recipe[]>{
        const recipes = await this.recipeRepository.find();
        return recipes;
    }
}