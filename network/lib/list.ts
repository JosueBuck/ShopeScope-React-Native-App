import { ICreateList, IListSettings, IListsResponseDTO, ISimplifiedListsResponseDTO } from "../../models/lists.model";
import { IDayRecipe, IListItem, INewListItem, IRecipeListIngredient } from "../../models/recipes.model";
import axiosClient from "../apiClient";
import { triggerErrorMessage } from "../useApi";

const basicPath: string = 'lists';

function createList(_userId: string, _newList: ICreateList) {
    return axiosClient.request<IListsResponseDTO>({
        method: 'post',
        url: `${basicPath}/createList/${_userId}`,
        data: _newList
    }).then((response) => {
        console.log(response.data.responseData);
        return response.data.responseData;
    }).catch(error => {
        triggerErrorMessage(error.response.data);
        console.log(error);
        return null;
    }
    );
}

function updateListSettings(_userId: string, _listId: string, _listSettings: IListSettings) {
    return axiosClient.request<IListsResponseDTO>({
        method: 'post',
        url: `${basicPath}/updateListSettings/${_userId}/${_listId}`,
        data: _listSettings
    }).then((response) => {
        console.log(response.data.responseData);
        return response.data.responseData;
    }).catch(error => {
        triggerErrorMessage(error.response.data);
        console.log(error); 
        return null;
    }
    );
}

function clearList(_userId: string, _listId: string) {
    return axiosClient.request<IListsResponseDTO>({
        method: 'delete',
        url: `${basicPath}/clearList/${_userId}/${_listId}`,
    }).then((response) => {
        console.log(response.data.responseData);
        return response.data.responseData;
    }).catch(error => {
        triggerErrorMessage(error.response.data);
        console.log(error);
        return null;
    }
    );
}

function deleteList(_userId: string, _listId: string) {
    return axiosClient.request<IListsResponseDTO>({
        method: 'delete',
        url: `${basicPath}/deleteList/${_userId}/${_listId}`,
    }).then((response) => {
        console.log(response.data.responseData);
        return response.data.responseData;
    }).catch(error => {
        triggerErrorMessage(error.response.data);
        console.log(error);
        return null;
    }
    );
}

function getList(_listId: string) {
    return axiosClient.request<IListsResponseDTO>({
        method: 'get',
        url: `${basicPath}/getList/${_listId}`,
    }).then((response) => {
        console.log(response.data.responseData);
        return response.data.responseData;
    }).catch(error => {
        triggerErrorMessage(error.response.data);
        console.log(error);
        return null;
    }
    );
}

function getSimplifiedUserLists(_userId: string) {
    return axiosClient.request<ISimplifiedListsResponseDTO>({
        method: 'get',
        url: `${basicPath}/getSimplifiedUserLists/${_userId}`,
    }).then((response) => {
        console.log(response.data.responseData);
        return response.data.responseData;
    }).catch(error => {
        triggerErrorMessage(error.response.data);
        console.log(error);
        return null;
    }
    );
}

function addWeekRecipesToList(_userId: string, _listId: string, weekRecipes: IDayRecipe[]) {
    return axiosClient.request<IListsResponseDTO>({
        method: 'post',
        url: `${basicPath}/addWeekRecipesToList/${_userId}/${_listId}`,
        data: {recipes: weekRecipes}
    }).then((response) => {
        console.log(response.data.responseData);
        return response.data.responseData;
    }).catch(error => {
        triggerErrorMessage(error.response.data);
        console.log(error); 
        return null;
    }
    );
}

function removeWeekRecipesFromList(_userId: string, _listId: string, _recipeIds: string[]) {
    return axiosClient.request<IListsResponseDTO>({
        method: 'delete',
        url: `${basicPath}/removeWeekRecipesFromList/${_userId}/${_listId}`,
        data: {ids: _recipeIds}
    }).then((response) => {
        console.log(response.data.responseData);
        return response.data.responseData;
    }).catch(error => {
        triggerErrorMessage(error.response.data);
        console.log(error); 
        return null;
    }
    );
}

function updateWeekRecipeIngredientInList(_userId: string, _listId: string, _recipeIngredient: IRecipeListIngredient) {
    return axiosClient.request<IListsResponseDTO>({
        method: 'patch',
        url: `${basicPath}/updateWeekRecipeIngredientInList/${_userId}/${_listId}`,
        data: _recipeIngredient
    }).then((response) => {
        console.log(response.data.responseData);
        return response.data.responseData;
    }).catch(error => {
        triggerErrorMessage(error.response.data);
        console.log(error); 
        return null;
    }
    );
}

function addListItem(_userId: string, _listId: string, _newListItem: INewListItem) {
    return axiosClient.request<IListsResponseDTO>({
        method: 'post',
        url: `${basicPath}/addListItem/${_userId}/${_listId}`,
        data: _newListItem
    }).then((response) => {
        console.log(response.data.responseData);
        return response.data.responseData;
    }).catch(error => {
        triggerErrorMessage(error.response.data);
        console.log(error); 
        return null;
    }
    );
}

function deleteListItem(_userId: string, _listId: string, _itemId: string) {
    return axiosClient.request<IListsResponseDTO>({
        method: 'delete',
        url: `${basicPath}/deleteListItem/${_userId}/${_listId}/${_itemId}`
    }).then((response) => {
        console.log(response.data.responseData);
        return response.data.responseData;
    }).catch(error => {
        triggerErrorMessage(error.response.data);
        console.log(error); 
        return null;
    }
    );
}

function updateListItem(_userId: string, _listId: string, _updatedListItem: IListItem) {
    return axiosClient.request<IListsResponseDTO>({
        method: 'patch',
        url: `${basicPath}/updateListItem/${_userId}/${_listId}`,
        data: {updatedListItem: _updatedListItem}
    }).then((response) => {
        console.log(response.data.responseData);
        return response.data.responseData;
    }).catch(error => {
        triggerErrorMessage(error.response.data);
        console.log(error); 
        return null;
    }
    );
}

export default {
    createList,
    updateListSettings,
    clearList,
    deleteList, 
    getList,
    getSimplifiedUserLists,
    addWeekRecipesToList,
    removeWeekRecipesFromList,
    updateWeekRecipeIngredientInList,
    addListItem,
    deleteListItem,
    updateListItem
}