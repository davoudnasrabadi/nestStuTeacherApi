import { Injectable } from '@nestjs/common';
import { FindTeacherResponseDto } from './teacher.dto';
import { teachers ,students } from '../db';
@Injectable()
export class TeacherService {

    private teachers: FindTeacherResponseDto[] = []; 


    getTeachers():FindTeacherResponseDto[]{
       this.teachers = teachers;
       return teachers;
    }
    
    getTeacherById(id:String):FindTeacherResponseDto{
        
        let findedTeacher = this.teachers.find(teacher => teacher.id === id);
        return findedTeacher;
    }

    getStudentsByTeacherId(id:string){
        let resp=[];
        students.forEach(stu =>{
            if(stu.teacher === id){
                resp.push(stu);
            }

        });

        return resp;
    }
}
