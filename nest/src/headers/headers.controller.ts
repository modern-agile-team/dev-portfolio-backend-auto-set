import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { HeaderDto } from './dto/header.dto';
import { Header } from './entities/header.entity';
import { HeadersService } from './headers.service';

@Controller('headers')
@UseGuards(AuthGuard('jwt'))
export class HeadersController {
  constructor(private readonly headersService: HeadersService) {}

  @Get('/:id')
  findAllById(@Param('id', ParseIntPipe) headerId: number): Promise<Header> {
    return this.headersService.findOneById(headerId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createOne(@Body() header: HeaderDto) {
    return await this.headersService.createOne(header);
  }
}
