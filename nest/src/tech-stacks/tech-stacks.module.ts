import { Module } from '@nestjs/common';
import { TechStacksService } from './tech-stacks.service';
import { TechStacksController } from './tech-stacks.controller';
import { TechStack } from './entities/tech-stack.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TechStack])],
  controllers: [TechStacksController],
  providers: [TechStacksService],
})
export class TechStacksModule {}
