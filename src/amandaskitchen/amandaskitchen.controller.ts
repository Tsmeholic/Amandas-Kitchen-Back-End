import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';
import { AmandasKitchenService } from './amandaskitchen.service';
import { Recipe } from './interfaces/recipe.entity';

let recipeDNE = 'Recipe has been submitted successfully!';

@Controller('cookbook')
export class AmandasKitchenController {
    constructor(private amandasKitchenService: AmandasKitchenService) {}

    @Post('/addrecipe')
    async addRecipe(@Res() res, @Body() addRecipeDTO: Recipe) {
        const newRecipe = await this.amandasKitchenService.addRecipe(addRecipeDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Recipe has been submitted successfully!',
            recipe: newRecipe,
        });
    }

    @Delete('/delete')
    async deleteRecipe(@Res() res, @Query('recipeID') recipeID) {
        const deletedRecipe = await this.amandasKitchenService.deleteRecipe(recipeID);
        if (!deletedRecipe){
            throw new NotFoundException(recipeDNE);
        }
        return res.status(HttpStatus.OK).json({
            message: 'Recipe has been deleted successfully!',
            recipe: deletedRecipe
        });
    }

    @Put('/')
    async editRecipe(@Res() res, @Query('recipeID') recipeID, @Body() addRecipeDTO: Recipe){
        const editedRecipe = await this.amandasKitchenService.editRecipe(recipeID, addRecipeDTO)
        if (!editedRecipe){
            throw new NotFoundException(recipeDNE);
        }
        return res.status(HttpStatus.OK).json({
            message: 'Recipe has been deleted successfully!',
            recipe: editedRecipe
        });
    }
    
    @Get('/:recipeID')
    async getRecipe(@Res() res, @Param('recipeID') recipeID){
        const recipe = await this.amandasKitchenService.getRecipe(recipeID);
        if (!recipe){
            throw new NotFoundException(recipeDNE);
        }
        return res.status(HttpStatus.OK).json(recipe);
    }
    
    @Get('/recipes')
    async getRecipes(@Res() res){
        const recipes = await this.amandasKitchenService.getRecipes();
        return res.status(HttpStatus.OK).json(recipes);
    }
}
