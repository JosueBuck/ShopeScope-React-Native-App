export interface IUserResponseDTO {
    message: string,
    responseData: ILoginResponse | IRegisterResponse,
    statusCode: number
}

export interface ILoginResponse {
    user: IUser, 
    jwt: string
}

export interface IRegisterResponse {
    newUser: IUser, 
    jwt: string
}

export interface ICreateUser {
    firstname: string, 
    lastname: string, 
    username: string, 
    password: string, 
    email: string
}

export interface IUser {
    _id: string, 
    firstname: string, 
    lastname: string, 
    username: string, 
    password: string, 
    email: string
}

export interface ILoginData {
    username: string, 
    password: string
}