import { Module } from '@nestjs/common';
import { TeacherController } from 'src/teacher/teacher.controller';
import {StudentTeacherController} from '../teacher/student.controller';
import {TeacherModule} from '../teacher/teacher.module';
import {TeacherService} from '../teacher/teacher.service';
import {StudentModule} from '../student/student.module';

@Module({
  imports: [StudentModule,TeacherModule],
  controllers:[TeacherController,StudentTeacherController],
  providers:[TeacherService]
})
export class AppModule {}

