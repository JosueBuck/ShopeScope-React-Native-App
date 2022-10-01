import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://192.168.1.5:8080' 
}); 

/* 
    Add interceptor
*/

export default axiosClient;