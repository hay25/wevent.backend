import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';
import { Author } from './author.entity';
import { TopicLabel } from './topic-label.entity';

@Entity('sessions')
export class Session {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    title: string;

    @Column()
    authors: Author[];

    @Column()
    labels: TopicLabel[];

    @Column()
    isFavorite: boolean = false;

    @Column()
    date: number;

    @Column()
    hour: string;

    @Column()
    room: string;

    @Column()
    abstract: string;
}