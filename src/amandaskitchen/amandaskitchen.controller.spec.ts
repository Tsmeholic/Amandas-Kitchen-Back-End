import { Test, TestingModule } from '@nestjs/testing';
import { AmandaskitchenController } from './amandaskitchen.controller';

describe('AmandaskitchenController', () => {
  let controller: AmandaskitchenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmandaskitchenController],
    }).compile();

    controller = module.get<AmandaskitchenController>(AmandaskitchenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
