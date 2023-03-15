import { Test, TestingModule } from '@nestjs/testing';
import { AmandasKitchenService } from './amandaskitchen.service';

describe('AmandaskitchenService', () => {
  let service: AmandasKitchenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmandasKitchenService],
    }).compile();

    service = module.get<AmandasKitchenService>(AmandasKitchenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
