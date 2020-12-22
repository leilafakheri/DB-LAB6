import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import {BooksService} from './books.service';
import CreateBookDto from './dto/create-book.dto';
import {ApiBearerAuth} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
@Controller('books')
export default class BookController {
  constructor(private readonly booksService: BooksService) {}
  @Post('post')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  postBook( @Body() book: CreateBookDto) {
    return this.booksService.insert(book);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAll() {
    return this.booksService.getAllBooks();
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Delete(':bookID')
    async deleteBook(@Param('bookID') bookID:Number) {
        const books = await this.booksService.deleteBook(bookID);
        return books;
    }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Put(':bookID')
    async updateBook(@Param('bookID') bookID:Number, @Body() book: CreateBookDto){
    return this.booksService.update(bookID, book);
    }


}