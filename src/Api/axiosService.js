import axios from "axios";
import {
  axiosCatchBlock,
  baseUrl,
  decodeData,
  getItemFromLocalStorage,
  hideLoader,
  showLoader,
} from "../utils/Constant";

const axiosService = axios.create({
  baseURL: baseUrl,
});

axiosService.interceptors.request.use(
  (config) => {
    showLoader();
    // For Authorization
    let token = getItemFromLocalStorage("userData");
    token = token?.data?.tokens?.accessToken;
    config.headers["authorization"] = "Bearer " + token;
    return config;
  },
  (error) => {
    hideLoader();
    return Promise.reject(error);
  }
);

axiosService.interceptors.response.use(
  (response) => {
    hideLoader();
    return response;
  },
  (error) => {
    hideLoader();
    return Promise.reject(error);
  }
);

export const getApi = async (endpoint) => {
  try {
    const response = await axiosService.get(endpoint);
    const data = decodeData(response.data.encodedData);
    return data;
  } catch (error) {
    return error.request.status !== 0
      ? decodeData(error?.response?.data?.encodedData)
      : axiosCatchBlock(error);
  }
};

export const postApi = async (endpoint, data) => {
  try {
    const response = await axiosService.post(endpoint, data);
    return decodeData(response.data.encodedData);
  } catch (error) {
    return error.request.status !== 0
      ? decodeData(error?.response?.data?.encodedData)
      : axiosCatchBlock(error);
  }
};

export const putApi = async (endpoint, data) => {
  try {
    const response = await axiosService.put(endpoint, data);
    return decodeData(response.data.encodedData);
  } catch (error) {
    return error.request.status !== 0
      ? decodeData(error?.response?.data?.encodedData)
      : axiosCatchBlock(error);
  }
};

export const deleteApi = async (endpoint) => {
  try {
    const response = await axiosService.delete(endpoint);
    return decodeData(response.data.encodedData);
  } catch (error) {
    return error.request.status !== 0
      ? decodeData(error?.response?.data?.encodedData)
      : axiosCatchBlock(error);
  }
};
