import axios from "axios";
import { getToken } from "./AuthService";

 const BASE_REST_API_URL = "http://34.89.230.14:8080/api/notes";
axios.interceptors.request.use(function(config){
    config.headers['Authorization'] = getToken();  
    return config;
}
,function(error){
    return Promise.reject(error);
});

export const getNotes = ()=> axios.get(BASE_REST_API_URL);

export const addNote =()=> axios.post(BASE_REST_API_URL);

export const updateNote = (noteDto) => axios.put(BASE_REST_API_URL,noteDto);

