import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema} from 'mongoose';

@InputType()
export class CreateBookInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  author: string;

  @Field(() => Number)
  year: number;
}

@InputType()
export class ListBookInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  author?: string;

  @Field(() => Number, { nullable: true })
  year?: number;
}

@InputType()
export class UpdateBookInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  author?: string;

  @Field(() => Number, { nullable: true })
  year?: number;
}