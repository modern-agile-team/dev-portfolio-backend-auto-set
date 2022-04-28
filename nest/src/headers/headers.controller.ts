import { Controller, Get, Post } from '@nestjs/common';
import { HeadersService } from './headers.service';

@Controller('header')
export class HeadersController {
  constructor(private readonly headersService: HeadersService) {}

  @Get('/')
  findAll() {
    return this.headersService.findAll();
  }

  @Post('/')
  createOne() {
    return this.headersService.createOne();
  }
}
