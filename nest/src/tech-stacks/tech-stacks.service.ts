import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TechStack } from './entities/tech-stack.entity';

@Injectable()
export class TechStacksService {
  constructor(
    @InjectRepository(TechStack)
    private techStackRepository: Repository<TechStack>,
  ) {}

  async findAll(): Promise<TechStack[]> {
    return await this.techStackRepository.find();
  }

  async createOne() {}
}
