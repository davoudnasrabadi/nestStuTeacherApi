import { Controller, Get, Param, Put } from '@nestjs/common';
import {FindTeacherResponseDto} from './teacher.dto';
import { TeacherService } from './teacher.service';
@Controller('teachers')
export class TeacherController {

    constructor(private readonly teacherSerive: TeacherService){}
    @Get()
    getTeachers():FindTeacherResponseDto[]{
        
      return this.teacherSerive.getTeachers();
    }

    @Get('/:id')
    getTeacher(@Param('id') teacherId:string):FindTeacherResponseDto{
       
        return this.teacherSerive.getTeacherById(teacherId);
    }

  

}
