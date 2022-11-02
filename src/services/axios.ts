import axios from "axios";

const api = axios.create({
    baseURL: 'https://pontogo-api.herokuapp.com',
    headers: {
        Authorization: process.env.NEXT_PUBLIC_API_TOKEN
    }
})

export default api;