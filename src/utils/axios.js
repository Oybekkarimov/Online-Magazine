import Axios from "axios";
import config from "../configs";
const { baseURL, baseImgUrl } = config;
const axios = Axios.create({
    baseURL,
    // withCredentials: true,
});
const ApiForImg = Axios.create({
    baseURL: baseImgUrl,
});

function getToken(config) {
    const token = localStorage["themovieDB"]
        ? JSON.parse(JSON.parse(localStorage["themovieDB"])).token
        : "";
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
}

axios.interceptors.request.use(
    (config) => {
        return getToken(config);
    },
    (error) => {
        return Promise.reject(error);
    }
);

ApiForImg.interceptors.request.use(
    (config) => getToken(config),
    (error) => {
        return Promise.reject(error);
    }
);

export { ApiForImg, axios as default };
