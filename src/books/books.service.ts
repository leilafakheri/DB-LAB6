import BookEntity from '../../db/book.entity';
import CreateBookDto from './dto/create-book.dto';
import UserEntity from '../../db/user.entity';
import { createQueryBuilder, getConnection } from 'typeorm';
import GenreEntity from '../../db/genre.entity';
import { HttpException } from '@nestjs/common';

export class BooksService {
  async update(bookID:any ,book: CreateBookDto) : Promise<any>{
     const { name , userID , genreIDs } = book;
    const current = await BookEntity.findByIds(bookID);
    let newbook = current[0];
    newbook.name = name;
    newbook.user = await UserEntity.findOne(userID) ;
    newbook.genres=[];
    for ( let i = 0; i < genreIDs.length ; i++)
    {
             const genre = await GenreEntity.findOne(genreIDs[i]);
             newbook.genres.push(genre);
    }
    await newbook.save();
    return newbook;
  }
  async deleteBook(bookID: any) : Promise<any> {
     await BookEntity.delete(bookID);
  }

  async insert(bookDetails: CreateBookDto): Promise<BookEntity> {
    const { name , userID , genreIDs } = bookDetails;
    const book = new BookEntity();
    book.name = name;
    book.user = await UserEntity.findOne(userID) ;
    book.genres=[];
    for ( let i = 0; i < genreIDs.length ; i++)
    {
             const genre = await GenreEntity.findOne(genreIDs[i]);
             book.genres.push(genre);
    }
    await book.save();
    return book;
  }
  async getAllBooks(): Promise<BookEntity[] > {
    // const user: UserEntity = await UserEntity.findOne({where: {id: 2}, relations: ['books']});
    return BookEntity.find();
  }
}