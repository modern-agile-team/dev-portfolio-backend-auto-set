import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TechStackDto } from './dto/tech-stack.dto';
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

  async createOne(techStackInfo: TechStackDto): Promise<TechStack> {
    const techStack: TechStack = await this.techStackRepository.save(
      techStackInfo,
    );

    return techStack;
  }
}
