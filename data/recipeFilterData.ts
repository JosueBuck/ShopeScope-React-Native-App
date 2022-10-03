import { IRecipeTypeData, RecipeType } from "../models/recipes.model";

export const recipeTypes: IRecipeTypeData[] = [
    {
        name: 'vegetarian',
        recipeType: RecipeType.VEGETARIAN
    },
    {
        name: 'vegan',
        recipeType: RecipeType.VEGAN
    },
    {
        name: 'breakfast',
        recipeType: RecipeType.BREAKFAST
    },
    {
        name: 'fastfood',
        recipeType: RecipeType.FASTFOOD
    },
    {
        name: 'homecooked',
        recipeType: RecipeType.HOMECOOKED
    },
    {
        name: 'onepot',
        recipeType: RecipeType.ONEPOT
    },
    {
        name: 'dessert',
        recipeType: RecipeType.DESSERT
    },
    {
        name: 'drinks',
        recipeType: RecipeType.DRINKS
    },{
        name: 'others',
        recipeType: RecipeType.OTHERS
    }
];