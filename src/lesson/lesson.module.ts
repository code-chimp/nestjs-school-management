import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Lesson from './lesson.entity';
import Student from '../student/student.entity';
import LessonResolver from './lesson.resolver';
import { LessonService } from './lesson.service';
import { StudentModule } from '../student/student.module';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson, Student]), StudentModule],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
