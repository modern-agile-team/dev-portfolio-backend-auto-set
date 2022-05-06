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

  @Get('/:no')
  findAllByNo(@Param('no', ParseIntPipe) headerNo: number): Promise<Header> {
    return this.headersService.findOneByNo(headerNo);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createOne(@Body() headerInfo: HeaderDto): Promise<Header> {
    return this.headersService.createOne(headerInfo);
  }

  @Put('/:no')
  @UsePipes(ValidationPipe)
  updateOneByNo(
    @Param('no', ParseIntPipe) headerNo: number,
    @Body() headerInfo: HeaderDto,
  ) {
    return this.headersService.updateOneByNo(headerNo, headerInfo);
  }
}
