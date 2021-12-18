import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { SessionFilter } from './dto/session-filter.dto';
import { Session } from './entities/session.entity';
import * as faker from "faker"
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
@Controller('event')
export class AppController {
  constructor(private readonly appService: AppService, @InjectRepository(Session)
  private readonly sessionRepository: MongoRepository<Session>,) { }

  @Get('sessions')
  async filterSessions(@Query() dto: SessionFilter): Promise<Session[]> {
    return this.appService.getSessions(dto.title, dto.author,);
  }
  @Get("fake")
  fake(): void {
    for (let i = 0; i < 100; i++) {
      const title = faker.lorem.words();

      const authors = [];
      for (let i = 0; i < faker.datatype.number(5); i++) {
        const author = {
          name: faker.name.findName(),
          institution: faker.lorem.words(),
        };

        authors.push(author);
      }

      const labels = [];
      for (let i = 0; i < faker.datatype.number(3); i++) {
        const label = {
          name: faker.lorem.word(),
          color: faker.commerce.color(),
        };

        labels.push(label);
      }

      const isFavorite = false;
      const date = faker.datatype.number({min:0,max:30});
      const hour = `${faker.datatype.number(24)}:${faker.datatype.number(59)}`
      const room = faker.fake("Room {{datatype.number}}");
      const abstract = faker.lorem.paragraph();

      const session = {
        title,
        authors,
        labels,
        isFavorite,
        date,
        hour,
        room,
        abstract,
      };
      this.sessionRepository.insertOne(session)
    }

  }
}
