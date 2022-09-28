import { Field, ID, InputType } from '@nestjs/graphql';
import { IsArray, IsDateString, IsOptional, IsUUID, MinLength } from 'class-validator';

@InputType()
export default class CreateLessonInput {
  @Field()
  @MinLength(3)
  name: string;

  @Field()
  @IsDateString()
  startDate: string;

  @Field()
  @IsDateString()
  endDate: string;

  @Field(() => [ID], { defaultValue: [] })
  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  students: Array<string>;
}
