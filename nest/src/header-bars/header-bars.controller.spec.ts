import { Test, TestingModule } from '@nestjs/testing';
import { HeaderBarsController } from './header-bars.controller';
import { HeaderBarsService } from './header-bars.service';

describe('HeaderBarsController', () => {
  let controller: HeaderBarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeaderBarsController],
      providers: [HeaderBarsService],
    }).compile();

    controller = module.get<HeaderBarsController>(HeaderBarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
