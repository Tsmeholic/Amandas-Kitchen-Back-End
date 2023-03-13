import { AmandasKitchenController } from './amandaskitchen.controller';
import { AmandasKitchenService } from './amandaskitchen.service';
import { AmandasKitchenSchema} from './schemas/amandaskitchen.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: 'Recipe', schema: AmandasKitchenSchema}]),
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
