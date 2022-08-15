import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { StudentDTO } from './dto/student.dto';
import { Student } from './schema/student.schema';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentsRepository: Repository<Student>,
    ) {}

    async findAll() : Promise<Student[]> {
        return await this.studentsRepository.find();
    }

    async createNewStudent(param : Student) : Promise<Student> {
        return await this.studentsRepository.save(param);
    }

    async updateStudent(param : Student) : Promise<UpdateResult> {
        return await this.studentsRepository.update(param.id, param);
    }

    async deleteStudent(id : number) : Promise<DeleteResult> {
        return await this.studentsRepository.delete(id);
    }
}
