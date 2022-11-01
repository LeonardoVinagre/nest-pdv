import { Test, TestingModule } from '@nestjs/testing';
import { LancheService } from './lanche.service';

describe('LancheService', () => {
  let service: LancheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LancheService],
    }).compile();

    service = module.get<LancheService>(LancheService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
