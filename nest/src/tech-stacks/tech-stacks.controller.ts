import { Get, UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TechStacksService } from './tech-stacks.service';

@Controller('tech-stacks')
@UseGuards(AuthGuard('jwt'))
export class TechStacksController {
  constructor(private readonly techStacksService: TechStacksService) {}

  @Get()
  findAll() {
    return this.techStacksService.findAll();
  }
}
