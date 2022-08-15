import {StudentRequest, StudentResponse} from "./StudentService.types";
import axios, { AxiosResponse } from "axios";
import { axiosConfig } from "../config";

class StudentService {
    static async findAll(): Promise<AxiosResponse<StudentResponse>> {
        return axios.get(`/student`, {
            ...axiosConfig(),
        });
    }

    static async createNewStudent(studentRequest: StudentRequest) {
        return axios.post(`/student`, studentRequest, {
            ...axiosConfig(),
        });
    }

    static async updateStudent(studentRequest: StudentRequest) {
        return axios.put(`/student`, studentRequest, {
            ...axiosConfig(),
        });
    }

    static async deleteStudent(studentId: number) {
        return axios.delete(`/student/${studentId}`, {
            ...axiosConfig(),
        });
    }
}

export default StudentService;