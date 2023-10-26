import { getApi, postApi } from "./axiosService";

const loginApi = (data) => {
  return postApi("users/login", data);
};

const getUsers = () => {
  return getApi("users/");
};

export { loginApi, getUsers };
