import { Controller } from '@nestjs/common';
import { TechStacksService } from './tech-stacks.service';

@Controller('tech-stacks')
export class TechStacksController {
  constructor(private readonly techStacksService: TechStacksService) {}
}
