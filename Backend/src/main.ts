import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  await app.listen(8081);
=======
  app.enableCors();
  await app.listen(8080);
>>>>>>> f28fca46aa5f819d392775dbfdd4d16fbce643e1
}
bootstrap();
