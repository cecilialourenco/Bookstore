import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';

import { Book, BookDocument } from './book.model';
import { CreateBookInput, ListBookInput, UpdateBookInput } from './book.inputs';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private bookModel: Model<BookDocument>,
  ) {}

  create(payload: CreateBookInput) {
    const createdBook = new this.bookModel(payload);
    return createdBook.save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.bookModel.findById(_id).exec();
  }

  list(filters: ListBookInput) {
    return this.bookModel.find({ ...filters }).exec();
  }

  update(payload: UpdateBookInput) {
    return this.bookModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.bookModel.findByIdAndDelete(_id).exec();
  }
}

