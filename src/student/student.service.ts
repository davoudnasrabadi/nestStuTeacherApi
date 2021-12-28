import { Injectable } from '@nestjs/common';
import {CreateStudentDto, UpdateStudentDto, FindStudentResponseDto} from './dto/student.dto';
import { students } from '../db';
@Injectable()
export class StudentService {
    private students: FindStudentResponseDto[] = []; 

    getStudents():FindStudentResponseDto[]{
        this.students = students;
        return this.students;
    }

    createStudent(){

    }

    getStudentById(studentId:string):FindStudentResponseDto{
        return this.students.find(student=> student.id === studentId);
    }


}
