import { AmandasKitchenController } from './amandaskitchen.controller';
import { AmandasKitchenService } from './amandaskitchen.service';
import { Recipe } from './interfaces/recipe.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
      TypeOrmModule.forFeature([ Recipe ]),
    ],
  providers: [
    AmandasKitchenService,
  ],
  controllers: [
    AmandasKitchenController
  ],
  exports: [
    AmandasKitchenService,
  ],
})

export class AmandasKitchenModule {}
