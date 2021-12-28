import { Controller, Get, Param, Put } from '@nestjs/common';
import {FindTeacherResponseDto} from './teacher.dto';
@Controller('teachers')
export class TeacherController {


    @Get()
    getTeachers():FindTeacherResponseDto[]{
        
        return [];
    }

    @Get('/:id')
    getTeacher(@Param('id') teacherId:string):FindTeacherResponseDto{
       
        return {id:'',name:''};
    }

  

}
