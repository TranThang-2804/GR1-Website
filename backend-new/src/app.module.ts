import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Student } from './student/schema/student.schema';
import { StudentModule } from './student/student.module';

@Module({
  imports: [StudentModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3360,
    username: 'root',
    password: '12345',
    database: 'mydb',
    entities: [Student],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
