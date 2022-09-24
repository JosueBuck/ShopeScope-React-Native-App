import { ICreateRecipe, IRecipeResponseDTO, ISimplifiedUserRecipeResponseDTO, RecipeType } from "../../models/recipes.model";
import axiosClient from "../apiClient";
import { triggerErrorMessage } from "../useApi";

const basicPath: string = 'recipes';

function getRecipe(_userId: string) {
    return axiosClient.request<IRecipeResponseDTO>({
        method: 'get',
        url: `${basicPath}/getRecipe/${_userId}`,
    }).then((response) => {
        return response.data.responseData;
    }).catch((error) => {
        triggerErrorMessage(error.response.data);
        console.log(error.response.data.message);
        return null;
    });
} 

function createRecipe(_userId: string, _recipe: ICreateRecipe) {
    return axiosClient.request<IRecipeResponseDTO>({
        method: 'post',
        url: `${basicPath}/createRecipe/${_userId}`,
        data: _recipe
    }).then((response) => {
        return response.data.responseData;
    }).catch((error) => {
        triggerErrorMessage(error.response.data);
        console.log(error.response);
        return null;
    });
}

function deleteRecipe(_userId: string, _recipeId: string) {
    return axiosClient.request<IRecipeResponseDTO>({
        method: 'delete',
        url: `${basicPath}/deleteRecipe/${_userId}/${_recipeId}`,
    }).then((response) => {
        return response.data.responseData;
    }).catch((error) => {
        triggerErrorMessage(error.response.data);
        console.log(error.response.data);
        return null;
    });
}

function getSimplifiedUserRecipe(_userId: string) {
    return axiosClient.request<ISimplifiedUserRecipeResponseDTO>({
        method: 'get',
        url: `${basicPath}/getSimplifiedUserRecipes/${_userId}`,
    }).then((response) => {
        return response.data.responseData;
    }).catch(error => {
        triggerErrorMessage(error.response.data);
        console.log(error.response.data);
    });
}

function getLatestSimplifiedUserRecipes(_userId: string) {
    return axiosClient.request<ISimplifiedUserRecipeResponseDTO>({
        method: 'get',
        url: `${basicPath}/getLatestSimplifiedUserRecipes/${_userId}`,
    }).then((response) => {
        return response.data.responseData;
    }).catch(error => {
        triggerErrorMessage(error.response.data);
        console.log(error.response.data);
    });
}

function getSimplifiedUserRecipesOfRecipeType(_userId: string, _recipeType: RecipeType[]) {
    return axiosClient.request<ISimplifiedUserRecipeResponseDTO>({
        method: 'post',
        url: `${basicPath}/getSimplifiedUserRecipesOfRecipeType/${_userId}`,
        data: {
            recipeType: _recipeType
        }
    }).then((response) => {
        return response.data.responseData;
    }).catch(error => {
        triggerErrorMessage(error.response.data);
        console.log(error.response.data);
    });
}


export default {
    getRecipe,
    createRecipe,
    deleteRecipe,
    getSimplifiedUserRecipe,
    getLatestSimplifiedUserRecipes,
    getSimplifiedUserRecipesOfRecipeType
}