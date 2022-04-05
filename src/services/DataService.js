import axios from "axios";

const BASE_URI = "http://localhost:8000/";

const headerConfig = {
    headers: {
        Authorization: "Bearer "+localStorage.getItem('access')
    }
}

export const NoteData = async (obj) => {
    return await axios.post(BASE_URI + 'api/note/', obj, headerConfig)
}

export const getNoteData = async () => {
    return await axios.get(BASE_URI + 'api/note/', headerConfig)
}

