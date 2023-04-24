import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_END_URL,
});

export default instance;
