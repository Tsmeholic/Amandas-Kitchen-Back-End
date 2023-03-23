import { Recipe } from "./interfaces/recipe.entity";
import { Injectable } from "@nestjs/common";
import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AmandasKitchenService {
    constructor(@InjectRepository(Recipe) private recipeRepository: Repository<Recipe>) {}

    async addRecipe(recipe: Recipe): Promise<Recipe> {
        return await this.recipeRepository.save(recipe);
    }

    async deleteRecipe(recipeID: string): Promise<DeleteResult> {
        return await this.recipeRepository.delete(recipeID);
    }

    async editRecipe(recipeID: string, recipe: Partial<Recipe>): Promise<Recipe>{
        recipe.ID = Number(recipeID);
        return await this.recipeRepository.save(recipe);
    }
    
    async getRecipe(recipeID: string): Promise<Recipe>{
        return await this.recipeRepository.findOneBy({
            ID: Number(recipeID)
        });
    }

    async getRecipes(): Promise<Recipe[]>{
        return await this.recipeRepository.find();
    }
}