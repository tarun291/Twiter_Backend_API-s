import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { Base } from './base.entity';
@Entity()
@ObjectType()
export class Promotion extends Base {
    @Field(() => String)
    @Column()
    subject: string;

    @Field(() => String)
    @Column()
    html: string;
    @Field(() => String)
    @Column()
    userId: string
}
