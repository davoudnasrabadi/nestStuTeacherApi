import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { consumers } from 'stream';
import {StudentController} from './student.controller';
import {StudentService} from './student.service';
import {ValidStudentMiddleware} from 'src/common/middleware/validStu.middleware';
@Module({

    imports:[],
    controllers:[StudentController],
    providers:[StudentService]
})
export class StudentModule implements NestModule {
    configure(consumer:MiddlewareConsumer) {
        consumer.apply(ValidStudentMiddleware).forRoutes({
            path:'students/:id',
            method: RequestMethod.GET
        })
        consumer.apply(ValidStudentMiddleware).forRoutes({
            path:'students/:id',
            method: RequestMethod.PUT
        })
    }
}
