import { Field, ID, InputType } from '@nestjs/graphql';
import { IsArray, IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export default class AssignStudentsInput {
  @Field(() => ID)
  @IsUUID()
  @IsNotEmpty()
  lessonId: string;

  @Field(() => [ID])
  @IsNotEmpty()
  @IsArray()
  @IsUUID('4', { each: true })
  studentIds: Array<string>;
}
