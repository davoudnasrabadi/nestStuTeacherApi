import { Body, Controller, Get, Param, Post, Put ,ParseUUIDPipe} from "@nestjs/common";
import {CreateStudentDto, UpdateStudentDto, FindStudentResponseDto} from './dto/student.dto';
import { StudentService } from "./student.service";
@Controller('students' )
export class StudentController {
  
    constructor(private readonly studentService: StudentService){}

    @Get()
    getStudents():FindStudentResponseDto[]{
        return this.studentService.getStudents();
    }
 
    @Get('/:id')
    getStudent(@Param('id',new ParseUUIDPipe()) stuId:string):FindStudentResponseDto{
        return this.studentService.getStudentById(stuId);
    }

    @Post()
    createStudent(@Body() body:CreateStudentDto){
        return this.studentService.createStudent(body);
    }

    @Put('/:id')
    updateStudent(@Param('id' , new ParseUUIDPipe()) studId:string,@Body() body:UpdateStudentDto){
        return this.studentService.updateStudent(body,studId);
    }
}
 