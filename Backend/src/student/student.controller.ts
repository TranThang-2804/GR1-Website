import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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
    createNewStudent(@Body() param : Student) {
        this.studentService.createNewStudent(param);
    }

    @Put()
    updateStudent(@Body() student : Student) {
        this.studentService.updateStudent(student);
    }

    @Delete(':id')
    deleteStudent(@Param() param) {
        this.studentService.deleteStudent(param.id);
    }
}
