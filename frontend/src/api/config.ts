import { AxiosRequestConfig } from "axios";
import qs from "qs";

export const SERVER_URL = `http://localhost:8080`;
export const API_BASE_URL = `${SERVER_URL}/api`;

export const axiosConfig = (): AxiosRequestConfig => {
    return {
        baseURL: API_BASE_URL,
        responseType: "json",
        validateStatus: (status: number) => status >= 200 && status < 300,
        paramsSerializer(params) {
            return qs.stringify(params, { arrayFormat: "comma" });
        },
    };
};