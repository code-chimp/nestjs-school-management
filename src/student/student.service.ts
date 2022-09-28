import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Student from './student.entity';
import CreateStudentInput from './create-student.input';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: MongoRepository<Student>,
  ) {}

  async get(id: string): Promise<Student> {
    return await this.studentRepository.findOne({ where: { id } });
  }

  async getAll(): Promise<Array<Student>> {
    return await this.studentRepository.find();
  }

  async getSome(ids: Array<string>): Promise<Array<Student>> {
    return await this.studentRepository.findBy({
      where: { id: { $in: ids } },
    });
  }

  async create(input: CreateStudentInput): Promise<Student> {
    const student = this.studentRepository.create({
      ...input,
      id: uuid(),
    });

    return await this.studentRepository.save(student);
  }
}
