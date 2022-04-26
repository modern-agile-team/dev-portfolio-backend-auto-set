import { Test, TestingModule } from '@nestjs/testing';
import { HeadersService } from './headers.service';

describe('HeaderBarsService', () => {
  let service: HeadersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeadersService],
    }).compile();

    service = module.get<HeadersService>(HeadersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
