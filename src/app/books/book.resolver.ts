import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { Book } from './book.model';
import { BookService } from './book.service';
import { CreateBookInput, UpdateBookInput } from './book.inputs';

@Resolver(() => Book)
export class BookResolver {
  constructor(private bookService: BookService) {}

  @Query(() => Book)
  async book(
    @Args('_id', {type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.bookService.getById(_id);
  }

  @Query(() => [Book])
  async books(
  ) {
    return this.bookService.list();
  }

  @Mutation(() => Book)
  async createBook(@Args('payload') payload: CreateBookInput) {
    return this.bookService.create(payload);
  }

  @Mutation(() => Book)
  async updateBook(@Args('payload') payload: UpdateBookInput) {
    return this.bookService.update(payload);
  }

  @Mutation(() => Book)
  async deleteBook(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.bookService.delete(_id);
  }
}
