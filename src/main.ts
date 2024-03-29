import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const HOST = '0.0.0.0';
const PORT = 8080

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT, HOST).then(() => {
    console.log("connected")
  });
}
bootstrap();
