import { StudentResponse } from "./StudentService.types";
import axios, { AxiosResponse } from "axios";
import { axiosConfig } from "../config";

class StudentService {
    static async findAll(): Promise<AxiosResponse<StudentResponse>> {
        return axios.get(`/student`, {
            ...axiosConfig(),
        });
    }
}

export default StudentService;