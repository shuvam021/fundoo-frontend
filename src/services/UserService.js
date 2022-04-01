import axios from "axios";


BASE_URI = "http://127.0.0.1:8000"

export const userSignin = async (obj)=>{
    let response = await axios.post(`${BASE_URI}/api/login/`, obj);
    return response
}
