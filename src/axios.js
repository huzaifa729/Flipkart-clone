import axios from "axios";

const instance = axios.create({
    baseURL: '...' //The API (Cloud Function using Nodejs)
});

export default instance;