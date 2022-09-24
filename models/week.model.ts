import { ICreateDayRecipe, IDayRecipe, IRecipe } from "./recipes.model"

export interface IWeekResponseDTO {
    message: string,
    responseData: any,
    statusCode: number
}

export interface IWeek {
    _id: string, 
    userId: string, 
    week: IDay[]
}

export interface IDay {
    _id: string, 
    name: string, 
    breakfast: IRecipe[], 
    lunch: IRecipe[],
    dinner: IRecipe[]
}

export interface ICreateDayRecipeData {
    dayId: string, 
    type: string, 
    recipe: ICreateDayRecipe
}

export interface IDdayRecipeData {
    dayId: string, 
    type: string, 
    recipe: IDayRecipe
}