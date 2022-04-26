import { Test, TestingModule } from '@nestjs/testing';
import { HeaderBarsService } from './header-bars.service';

describe('HeaderBarsService', () => {
  let service: HeaderBarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeaderBarsService],
    }).compile();

    service = module.get<HeaderBarsService>(HeaderBarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
