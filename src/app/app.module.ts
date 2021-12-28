import { Module } from '@nestjs/common';
import {StudentController} from '../student/student.controller';
import { TeacherController } from 'src/teacher/teacher.controller';
import {StudentTeacherController} from '../teacher/student.controller';
import {StudentService} from '../student/student.service';
@Module({
  imports: [],
  controllers:[StudentController,TeacherController,StudentTeacherController],
  providers:[StudentService]
})
export class AppModule {}

