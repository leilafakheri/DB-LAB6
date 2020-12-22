import { Body, Controller, Get, Post, Delete, Query, UseGuards } from '@nestjs/common';
import GenreServices from './genre.service';
import CreateGenreDto from './dto/create-genre.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('genre')
export default class GenreController {
  constructor(private readonly genreServices: GenreServices) {}
  @Post('post')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  postGenre( @Body() genre: CreateGenreDto) {
    return this.genreServices.insert(genre);
  }
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAll() {
    return this.genreServices.getAllGenre();
  }
  }