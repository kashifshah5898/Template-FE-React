import axios from "axios";
import { baseUrl, hideLoader, showLoader } from "../utils/Constant";

const axiosService = axios.create({
    baseURL: baseUrl
});

axiosService.interceptors.request.use(
    (config) => {
        showLoader()
        // For Authorization
        // config.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
        return config;
    },
    (error) => {
        hideLoader()
        return Promise.reject(error);
    }
);

axiosService.interceptors.response.use(
    (response) => {
        hideLoader()
        return response;
    },
    (error) => {
        hideLoader()
        return Promise.reject(error);
    }
);


export const getApi = async (endpoint) => {
    try {
        const response = await axiosService.get(endpoint);

        return response.data;
    } catch (error) {
        return error?.response?.data || {
            success: false, msg: error?.message
        };
    }
};

export const postApi = async (endpoint, data) => {
    try {
        const response = await axiosService.post(endpoint, data);
        return response.data;
    } catch (error) {
        return error?.response?.data || {
            success: false, msg: error?.message
        };
    }
};

export const putApi = async (endpoint, data) => {
    try {
        const response = await axiosService.put(endpoint, data);

        return response.data;
    } catch (error) {
        return error?.response?.data || {
            success: false, msg: error?.message
        };
    }
};

export const deleteApi = async (endpoint) => {
    try {
        const response = await axiosService.delete(endpoint);

        return response.data;
    } catch (error) {
        return error?.response?.data || {
            success: false, msg: error?.message
        };
    }
};