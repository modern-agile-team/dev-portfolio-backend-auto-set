import { Test, TestingModule } from '@nestjs/testing';
import { AdminsController } from './admins.controller';

describe('AdminsController', () => {
  let controller: AdminsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminsController],
    }).compile();

    controller = module.get<AdminsController>(AdminsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
