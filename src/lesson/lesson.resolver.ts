import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { StudentService } from '../student/student.service';
import LessonType from './lesson.type';
import { LessonService } from './lesson.service';
import CreateLessonInput from './create-lesson.input';
import AssignStudentsInput from './assign-students.input';
import Lesson from './lesson.entity';

@Resolver(() => LessonType)
export default class LessonResolver {
  constructor(private lessonService: LessonService, private studentService: StudentService) {}

  @Query(() => LessonType)
  async lesson(@Args('id') id: string) {
    return await this.lessonService.get(id);
  }

  @Query(() => [LessonType])
  async lessons() {
    return await this.lessonService.getAll();
  }

  @Mutation(() => LessonType)
  async createLesson(@Args('newLessonInfo') newLessonInfo: CreateLessonInput) {
    return await this.lessonService.create(newLessonInfo);
  }

  @Mutation(() => LessonType)
  async assignStudents(
    @Args('newStudentsForLesson') { lessonId, studentIds }: AssignStudentsInput,
  ) {
    return await this.lessonService.assignStudents(lessonId, studentIds);
  }

  @ResolveField()
  async students(@Parent() lesson: Lesson) {
    return await this.studentService.getSome(lesson.students);
  }
}
