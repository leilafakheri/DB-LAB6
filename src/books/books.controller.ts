import { Body, Controller, Get, Post } from '@nestjs/common';
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
}