import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
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
  createOne(@Body() headerInfo: HeaderDto): Promise<Header> {
    return this.headersService.createOne(headerInfo);
  }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  updateOneById(
    @Param('id', ParseIntPipe) headerId: number,
    @Body() headerInfo: HeaderDto,
  ) {
    return this.headersService.updateOneById(headerId, headerInfo);
  }
}
