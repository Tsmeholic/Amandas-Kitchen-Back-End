import { Test, TestingModule } from '@nestjs/testing';
import { AmandaskitchenService } from './amandaskitchen.service';

describe('AmandaskitchenService', () => {
  let service: AmandaskitchenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmandaskitchenService],
    }).compile();

    service = module.get<AmandaskitchenService>(AmandaskitchenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
