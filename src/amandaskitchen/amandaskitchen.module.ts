import { AmandasKitchenController } from './amandaskitchen.controller';
import { AmandasKitchenService } from './amandaskitchen.service';
import { Recipe } from './interfaces/recipe.entity';
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
  ]
})

export class AmandasKitchenModule {}
