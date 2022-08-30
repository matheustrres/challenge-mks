import { Injectable } from '@nestjs/common';

import { iUpdateBookProps } from '@types';

import { BooksEntity } from '@modules/books/infra/typeorm/entities/books.entity';
import { BooksRepository } from '@modules/books/infra/typeorm/repositories/books.repository';

import { BookNotFoundException } from '@shared/exceptions/books';

@Injectable()
export class UpdateBookService {
  constructor(private booksRepository: BooksRepository) {};

  async perform(data: iUpdateBookProps): Promise<BooksEntity> {
    const book: BooksEntity = await this.booksRepository.findByName(data.name);

    if (!book) throw new BookNotFoundException();

    const updatedBook: BooksEntity = await this.booksRepository.updateOne(data);

    return updatedBook;
  }
}