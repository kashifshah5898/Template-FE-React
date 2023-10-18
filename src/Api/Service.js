import { getApi, postApi } from "./axiosService"

export const loginApi = (data) => {
    return postApi('login', data)
}

