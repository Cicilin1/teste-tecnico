import  axios from "axios";

const api = axios.create({
    baseURL: "https://wefit-movies.vercel.app/api/movies"
});

export default api;