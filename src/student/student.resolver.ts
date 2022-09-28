import { StudentService } from './student.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import StudentType from './student.type';
import CreateStudentInput from './create-student.input';

@Resolver(() => StudentType)
export default class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => StudentType)
  async student(@Args('id') id: string) {
    return await this.studentService.get(id);
  }

  @Query(() => [StudentType])
  async students() {
    return await this.studentService.getAll();
  }

  @Mutation(() => StudentType)
  async createStudent(@Args('newStudentInfo') newStudentInfo: CreateStudentInput) {
    return await this.studentService.create(newStudentInfo);
  }
}
