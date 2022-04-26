import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HeaderBarsService } from './header-bars.service';
import { CreateHeaderBarDto } from './dto/create-header-bar.dto';
import { UpdateHeaderBarDto } from './dto/update-header-bar.dto';

@Controller('header-bars')
export class HeaderBarsController {
  constructor(private readonly headerBarsService: HeaderBarsService) {}

  @Post()
  create(@Body() createHeaderBarDto: CreateHeaderBarDto) {
    return this.headerBarsService.create(createHeaderBarDto);
  }

  @Get()
  findAll() {
    return this.headerBarsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.headerBarsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHeaderBarDto: UpdateHeaderBarDto) {
    return this.headerBarsService.update(+id, updateHeaderBarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.headerBarsService.remove(+id);
  }
}
