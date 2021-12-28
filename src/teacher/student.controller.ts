import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import {FindStudentResponseDto} from '../student/dto/student.dto';
@Controller('teachers/:id/students')
export class StudentTeacherController {


    @Get()
    getStudentsOfTeacher(@Param('id') teacherId:string):FindStudentResponseDto[]{
       
        return [];
    }
 
    @Put('/:stuId')
    updateStudentOfTeacher(@Param('id') teacherId:string, @Param('stuId') stuId:string , @Body('name') name:string, @Body('teacherId') teacherId2:string){
        return "update Student: "+stuId+" of teacher: "+teacherId+" | set name to: "+name+" and teacherId to: "+teacherId2;
    }

}
