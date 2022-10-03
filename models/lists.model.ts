import { IDayRecipe, INewListItem } from "./recipes.model"

export interface IListsResponseDTO {
    message: string,
    responseData: IList,
    statusCode: number
}

export interface ISimplifiedListsResponseDTO {
    message: string,
    responseData: ISimplifiedList[],
    statusCode: number
}

export interface ICreateList {
    name: string, 
    description: string,
    weekRecipes: IDayRecipe[],
    listItems: INewListItem[], 
    itemCounter: number, 
    listPictureUrl: string
}

export interface IList {
    _id: string,
    name: string, 
    description: string,
    weekRecipes: IDayRecipe[],
    listItems: INewListItem[], 
    itemCounter: number, 
    listPictureUrl: string
}

export interface IListSettings {
    name: string, 
    description: string, 
    listPictureUrl: string
}

export interface ISimplifiedList {

    _id: string;
    name: string;
    itemCounter: number;
    listPictureUrl: string;

}