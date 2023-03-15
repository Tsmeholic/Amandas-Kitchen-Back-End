import { AmandasKitchenModule } from './amandaskitchen/amandaskitchen.module';
import { AmandasKitchenService } from './amandaskitchen/amandaskitchen.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { AmandasKitchenController } from './amandaskitchen/amandaskitchen.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host: '/cloudsql/amandas-kitchen-backend:us-central1:amandaskitchendatabase',
      port: 5432,
      username: 'amandaskitchen-user',
      password: '.!R)QSA#[DQd(C33@58{',
      database: 'Recipes',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
    }),
    AmandasKitchenModule,
  ],
  controllers: [
    AppController,
    AmandasKitchenController
  ],
  providers: [
    AppService,
    AmandasKitchenService
  ],
})

export class AppModule {}