import { ICreateDayRecipeData, IDdayRecipeData, IWeekResponseDTO } from "../../models/week.model";
import axiosClient from "../apiClient";
import { triggerErrorMessage } from "../useApi";

const basicPath: string = 'weeks';

function getUserWeek(_userId: string, ) {
    return axiosClient.request<IWeekResponseDTO>({
        method: 'get',
        url: `${basicPath}/getUserWeek/${_userId}`,
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

function setSelectedWeekList(_userId: string, _listId: string) {
    return axiosClient.request<IWeekResponseDTO>({
        method: 'post',
        url: `${basicPath}/setSelectedWeekList/${_userId}/${_listId}`,
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

function addRecipeToDay(_userId: string, _newDayRecipe: ICreateDayRecipeData) {
    return axiosClient.request<IWeekResponseDTO>({
        method: 'put',
        url: `${basicPath}/addRecipeToDay/${_userId}`,
        data: _newDayRecipe
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

function removeRecipeFromDay(_userId: string, _dayRecipeData: IDdayRecipeData) {
    return axiosClient.request<IWeekResponseDTO>({
        method: 'delete',
        url: `${basicPath}/removeRecipeFromDay/${_userId}`,
        data: _dayRecipeData
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

function removeAllRecipesFromWeek(_userId: string) {
    return axiosClient.request<IWeekResponseDTO>({
        method: 'delete',
        url: `${basicPath}/removeAllRecipesFromWeek/${_userId}`
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
    getUserWeek,
    setSelectedWeekList,
    addRecipeToDay,
    removeRecipeFromDay,
    removeAllRecipesFromWeek
}