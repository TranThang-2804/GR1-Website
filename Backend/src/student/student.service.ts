import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentDTO } from './dto/student.dto';
import { Student } from './schema/student.schema';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentsRepository: Repository<Student>,
    ) {}

    findAll() : Promise<Student[]> {
        return this.studentsRepository.find();
    }

    save(param : StudentDTO) {
        this.studentsRepository.save(param);
    }
}
