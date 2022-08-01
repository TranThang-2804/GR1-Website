import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './schema/student.schema';
import { StudentDTO } from './dto/student.dto';

@Controller('api/student')
export class StudentController {
    constructor(private studentService: StudentService) {}

    @Get()
    findAll() : Promise<Student[]> {
        return this.studentService.findAll();
    }

    @Post()
    save(@Body() param : StudentDTO) {
        this.studentService.save(param);
    }
}
