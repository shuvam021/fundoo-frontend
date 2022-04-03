import axios from "axios";

const BASE_URI = "http://127.0.0.1:8000/";

export const userSignIn = async (obj)=>{
    return await axios.post(BASE_URI + 'api/login/', obj)
}

export const userSignUp = async (obj)=>{
    return await axios.post(BASE_URI + 'api/auth/register/', obj)
}
