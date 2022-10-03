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

function getSimplifiedUserRecipes(_userId: string) {
    return axiosClient.request<ISimplifiedUserRecipeResponseDTO>({
        method: 'get',
        url: `${basicPath}/getSimplifiedUserRecipes/${_userId}`,
    }).then((response) => {
        console.log(response.data.responseData);
        return response.data.responseData;
    }).catch(error => {
        triggerErrorMessage(error.response.data);
        console.log(error.response.data);
        return null;
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
        return null;
    });
}

function getSimplifiedUserRecipesWithFilter(_userId: string, _searchValue: string, _recipeType: RecipeType[]) {
    return axiosClient.request<ISimplifiedUserRecipeResponseDTO>({
        method: 'post',
        url: `${basicPath}/getSimplifiedUserRecipesWithFilter/${_userId}`,
        data: {
            recipeType: _recipeType,
            searchValue: _searchValue
        }
    }).then((response) => {
        return response.data.responseData;
    }).catch(error => {
        triggerErrorMessage(error.response.data);
        console.log(error.response.data);
        return null;
    });
}


export default {
    getRecipe,
    createRecipe,
    deleteRecipe,
    getSimplifiedUserRecipes,
    getLatestSimplifiedUserRecipes,
    getSimplifiedUserRecipesWithFilter
}