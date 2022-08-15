import { Body, ConsoleLogger, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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
    async createNewStudent(@Body() param : Student) : Promise<string> {
        var studentList = this.studentService.findAll();
        var check = 0;
        (await studentList).forEach(student => {
            if(student.id === param.id) {
                check++;
            }
        });
        if(check === 0) {
            this.studentService.createNewStudent(param);
            return "Successfully create student";
        }else {
            return "Cannot create student with id = " + param.id;
        }
    }

    @Put()
    updateStudent(@Body() student : Student) : string {
        this.studentService.updateStudent(student);
        return "Update successfully";
    }

    @Delete(':id')
    deleteStudent(@Param() param) : string {
        this.studentService.deleteStudent(param.id);
        return "Delete successfully";
    }
}
