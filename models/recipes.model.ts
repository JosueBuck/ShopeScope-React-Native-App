export enum RecipeType {

    VEGETARIAN = "VEGETARIAN",
    VEGAN = "VEGAN",
    BREAKFAST = "BREAKFAST",
    FASTFOOD = "FASTFOOD",
    HOMECOOKED = "HOMECOOKED",
    ONEPOT = "ONEPOT",
    DESSERT = "DESSERT",
    DRINKS = "DRINKS",
    OTHERS = "OTHERS"

}

export enum ItemType {

    FRUITS = "FRUITS",
    VEGETABLE = "VEGETABLE",
    BAKEWAREPRODUCTS = "BAKEWAREPRODUCTS",
    CANFOODPRODUCTS = "CANFOODPRODUCTS",
    MEATPRODUCTS = "MEATPRODUCTS",
    MILKPRODUCTS = "MILKPRODUCTS",
    FROZENPRODUCTS = "FROZENPRODUCTS",
    ELECTRICALPRODUCTS = "ELECTRICALPRODUCTS",
    HYGIENEPRODUCTS = "HYGIENEPRODUCTS",
    DRINKS = "DRINKS",
    SNACKS = "SNACKS",
    SWEETS = "SWEETS",
    OTHERS = "OTHERS"
}

export interface IRecipeResponseDTO {
    message: string,
    responseData: IRecipe,
    statusCode: number
}

export interface ISimplifiedUserRecipeResponseDTO {
    message: string,
    responseData: ISimplifiedUserRecipe[],
    statusCode: number
}

export interface ICreateRecipe {
    name: string;
    garnish: string;
    cookingTime: number;
    description: string;
    ingredients: ICreateIngredient[];
    instructions: string[];
    recipePictureUrl: string;
    recipeType: string[];
}


export interface IRecipe {
    _id: string;
    name: string;
    garnish: string;
    cookingTime: number;
    description: string;
    ingredients: IIngredient[];
    instructions: string[];
    recipePictureUrl: string;
    recipeType: string[];
}

export interface ISimplifiedUserRecipe {
    _id: string, 
    name: string;
    garnish: string;
    cookingTime: number;
    recipePictureUrl: string;
    recipeType: string[];
}

export interface ICreateIngredient {
    name: string;
    amount: number;
    unit: string;
    itemType: string;
}

export interface IIngredient {
    _id: string;
    name: string;
    amount: number;
    unit: string;
    itemType: string;
}

export interface ICreateDayRecipe {
    name: string, 
    garnish: string, 
    originalRecipeId: string, 
    recipePictureUrl: string, 
    ingredients: INewListItem[]

}

export interface IDayRecipe {
    _id: string, 
    name: string, 
    garnish: string, 
    originalRecipeId: string, 
    recipePictureUrl: string, 
    ingredients: IListItem[]
}

export interface INewListItem {
    name: string;
    amount: number;
    unit: string;
    itemType: ItemType,
    isDone: boolean;
}

export interface IListItem {
    _id: string,
    name: string;
    amount: number;
    unit: string;
    itemType: ItemType,
    isDone: boolean;
}

export interface IRecipeListIngredient {
    recipeId: string, 
    ingredientId: string, 
    isDone: boolean
}

