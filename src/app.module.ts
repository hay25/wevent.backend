import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Session } from './entities/session.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mongodb',
    url: 'mongodb://127.0.0.1:27017',
    database: 'wevent',
    entities: [
      __dirname + '/**/*.entity{.ts,.js}',
    ],
    ssl: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
  }),
  TypeOrmModule.forFeature([Session])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
