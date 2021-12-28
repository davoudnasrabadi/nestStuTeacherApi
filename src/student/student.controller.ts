import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import {CreateStudentDto, UpdateStudentDto, FindStudentResponseDto} from './dto/student.dto';
@Controller('students')
export class StudentController {
  

    @Get()
    getStudents():FindStudentResponseDto[]{
        return [];
    }
 
    @Get('/:id')
    getStudent(@Param('id') stuId:string):FindStudentResponseDto{
        return {id:'',name:'',teacher:''};
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
 