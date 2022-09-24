import { ICreateUser, ILoginData, IUser, IUserResponseDTO } from "../../models/user.model";
import axiosClient from "../apiClient";
import { triggerErrorMessage } from "../useApi";

const basicPath: string = 'user';

function login(_loginData: ILoginData) {
    return axiosClient.request<IUserResponseDTO>({
        method: 'post',
        url: `${basicPath}/login`,
        data: _loginData
    }).then((response) => {
        return response.data.responseData;
    }).catch((error) => {
        triggerErrorMessage(error.response.data);
        console.log(error.response.data.message);
        return null;
    });
} 

function register(_registerData: ICreateUser) {
    return axiosClient.request<IUserResponseDTO>({
        method: 'post',
        url: `${basicPath}/register`,
        data: _registerData
    }).then((response) => {
        return response.data.responseData;
    }).catch((error) => {
        triggerErrorMessage(error.response.data);
        console.log(error.response.data.message);
        return null;
    });
} 

function deleteUser(_userId: string) {
    return axiosClient.request<IUserResponseDTO>({
        method: 'delete',
        url: `${basicPath}/deleteUser/${_userId}`
    }).then((response) => {
        return response.data.responseData;
    }).catch((error) => {
        triggerErrorMessage(error.response.data);
        console.log(error.response.data.message);
        return null;
    });
} 

function updateUserInformations(_userId: string, _updatedUserData: IUser) {
    return axiosClient.request<IUserResponseDTO>({
        method: 'put',
        url: `${basicPath}/updateUserInformations/${_userId}`,
        data: _updatedUserData
    }).then((response) => {
        console.log(response.data.responseData);
        return response.data.responseData;
    }).catch((error) => {
        triggerErrorMessage(error.response.data);
        console.log(error.response.data.message);
        return null;
    });
} 


export default {
    login,
    register,
    deleteUser,
    updateUserInformations
}