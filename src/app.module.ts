import { AmandasKitchenModule } from './amandaskitchen/amandaskitchen.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/', { useNewUrlParser: true }),
    //ConfigModule.forRoot(),
    AmandasKitchenModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService, 
  ],
})

export class AppModule {}