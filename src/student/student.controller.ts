import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import {CreateStudentDto, UpdateStudentDto, FindStudentResponseDto} from './dto/student.dto';
import { StudentService } from "./student.service";
@Controller('students')
export class StudentController {
  
    constructor(private readonly studentService: StudentService){}

    @Get()
    getStudents():FindStudentResponseDto[]{
        return this.studentService.getStudents();
    }
 
    @Get('/:id')
    getStudent(@Param('id') stuId:string):FindStudentResponseDto{
        return this.studentService.getStudentById(stuId);
    }

    @Post()
    createStudent(@Body() body:CreateStudentDto){
        return `create student for name: ${body.name} and teacherId: ${body.teacher}`;
    }

    @Put('/:id')
    updateStudent(@Param('id') studId:string,@Body() body:UpdateStudentDto){
        return `update student with id:${studId} , set name to:${body.name} and teacherId to ${body.teacher}`;
    }
}
 