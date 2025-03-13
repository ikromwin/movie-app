import axios from "axios";


const API_KEY = "3e34fca40f9822d5ea4ded0406757754";
const BASE_URL = "https://api.themoviedb.org/3/";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: "en-US",
    },
});

// Interceptor for error handling
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Error:", error);
        return Promise.reject(error);
    }
);

export default axiosInstance;