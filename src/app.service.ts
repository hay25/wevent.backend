import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Session } from './entities/session.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: MongoRepository<Session>,
  ) { }
  async getSessions(title?: string, author?: string): Promise<Session[]> {
    const query: any = {};

    if (title) {
      query.title = { $regex: title };
    }
    if (author) {
      query.authors = { $elemMatch: { name: { $regex: author } } };
    }
    const sessions = await this.sessionRepository.find({ where: query });
    return sessions;
  }
}
