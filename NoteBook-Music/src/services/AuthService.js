import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://34.89.230.14:8080/api/auth/";

//registerRestAPICall
export const registerAPICall=(registerObj) => axios.post(AUTH_REST_API_BASE_URL+"/register",registerObj);

export const loginAPICall=(loginObj)=> axios.post(AUTH_REST_API_BASE_URL+"/login",loginObj);

export const getToken= () => localStorage.getItem("token");

export const storeToken=(token) => localStorage.setItem("token",token);

export const saveLoggedInUser= (name) =>sessionStorage.setItem("authenticatedUser",name);

export const isUserLoggedIn = () =>{
    const username = localStorage.getItem("token");
    if(username == null){
        return false;
    }
    else{
        return true;
    }
}

export const getLoggedInUser = () =>{
    return sessionStorage.getItem("authenticatedUser");
}

export const logOut= ()=>{
    localStorage.removeItem("token");
    sessionStorage.removeItem("authenticatedUser");
    window.location.reload(false);
}