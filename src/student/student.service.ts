import { Injectable } from '@nestjs/common';
import {CreateStudentDto, UpdateStudentDto, FindStudentResponseDto} from './dto/student.dto';
import { students } from '../db';
import {v4 as uuid} from 'uuid';
import { FindTeacherResponseDto } from 'src/teacher/teacher.dto';
@Injectable()
export class StudentService {
    private students: FindStudentResponseDto[] = []; 

    getStudents():FindStudentResponseDto[]{
        this.students = students;
        return this.students;
    }

    createStudent(data:CreateStudentDto):FindStudentResponseDto{
       let newStudent = {
           id: uuid(),
           ...data
       }
       this.students.push(newStudent);
       return newStudent;

    }

    getStudentById(studentId:string):FindStudentResponseDto{
        return this.students.find(student=> student.id === studentId);
    }

    updateStudent(payload:UpdateStudentDto, id:string):FindTeacherResponseDto{
       let findedStu = this.students.find( item=> item.id === id);
       if(!findedStu){
           return null;
       }
       let findedIndex = this.students.findIndex(item => item.id === id);
       if(payload.name){
           findedStu.name=payload.name;
       }
       if(payload.teacher){
           findedStu.teacher = payload.teacher;
       }
       this.students[findedIndex] = findedStu;
       return findedStu;
        
    }


}
