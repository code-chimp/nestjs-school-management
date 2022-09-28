import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Lesson from './lesson.entity';
import CreateLessonInput from './create-lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepository: MongoRepository<Lesson>,
  ) {}

  async get(id: string): Promise<Lesson> {
    return await this.lessonRepository.findOne({ where: { id } });
  }

  async getAll(): Promise<Array<Lesson>> {
    return await this.lessonRepository.find();
  }

  async create(input: CreateLessonInput): Promise<Lesson> {
    const lesson = await this.lessonRepository.create({
      ...input,
      id: uuid(),
    });

    return await this.lessonRepository.save(lesson);
  }

  async assignStudents(lessonId: string, studentIds: Array<string>): Promise<Lesson> {
    const lesson = await this.get(lessonId);

    lesson.students = [...studentIds, ...(lesson.students || [])];

    return await this.lessonRepository.save(lesson);
  }
}
