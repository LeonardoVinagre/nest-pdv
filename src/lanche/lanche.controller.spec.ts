import { Test, TestingModule } from '@nestjs/testing';
import { LancheController } from './lanche.controller';

describe('LancheController', () => {
  let controller: LancheController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LancheController],
    }).compile();

    controller = module.get<LancheController>(LancheController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
