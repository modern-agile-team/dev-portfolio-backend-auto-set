import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TechStackDto } from './dto/tech-stack.dto';
import { TechStack } from './entities/tech-stack.entity';

@Injectable()
export class TechStacksService {
  connection: any;
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

  async updateOneByNo(
    techStackNo: number,
    techStackInfo: TechStackDto,
  ): Promise<TechStack> {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const techStack: TechStack = await this.techStackRepository.findOne(
        techStackNo,
      );

      techStack.name = techStackInfo.name;
      techStack.gauge = techStackInfo.gauge;

      await this.techStackRepository.save(techStack);

      return techStack;
    } catch (error) {
      await queryRunner.rollbackTransaction();

      throw new InternalServerErrorException(
        `Can't update techStack with no $${techStackNo}`,
      );
    } finally {
      await queryRunner.release();
    }
  }
}
