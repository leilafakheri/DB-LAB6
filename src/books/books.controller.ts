import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import {BooksService} from './books.service';
import CreateBookDto from './dto/create-book.dto';

@Controller('books')
export default class BookController {
  constructor(private readonly booksService: BooksService) {}
  @Post('post')
  postBook( @Body() book: CreateBookDto) {
    return this.booksService.insert(book);
  }
  @Get()
  getAll() {
    return this.booksService.getAllBooks();
  }

  @Delete(':bookID')
    async deleteBook(@Param('bookID') bookID:Number) {
        const books = await this.booksService.deleteBook(bookID);
        return books;
    }
  @Put(':bookID')
    async updateBook(@Param('bookID') bookID:Number, @Body() book: CreateBookDto){
    return this.booksService.update(bookID, book);
    }
}