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
import { HeadersService } from './headers.service';

@Controller('headers')
@UseGuards(AuthGuard('jwt'))
export class HeadersController {
  constructor(private readonly headersService: HeadersService) {}

  @Get('/:id')
  async findAllById(@Param('id', ParseIntPipe) headerId: number) {
    return await this.headersService.findAllById(headerId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createOne(@Body() header: HeaderDto) {
    return await this.headersService.createOne(header);
  }
}
