import { Test, TestingModule } from '@nestjs/testing';
import { TechStacksService } from './tech-stacks.service';

describe('TechStacksService', () => {
  let service: TechStacksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechStacksService],
    }).compile();

    service = module.get<TechStacksService>(TechStacksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
