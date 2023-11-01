import axios from "axios";
import { getToken } from "./AuthService";

 const BASE_REST_API_URL = "http://localhost:8080/api/notes";
axios.interceptors.request.use(function(config){
    config.headers['Authorization'] = getToken();  
    return config;
}
,function(error){
    return Promise.reject(error);
});

export const getNotes = ()=> axios.get(BASE_REST_API_URL);

export const addNote =()=> axios.post(BASE_REST_API_URL);

