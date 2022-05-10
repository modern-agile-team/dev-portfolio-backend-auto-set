import {
  Body,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TechStackDto } from './dto/tech-stack.dto';
import { TechStack } from './entities/tech-stack.entity';
import { TechStacksService } from './tech-stacks.service';

@Controller('tech-stacks')
@UseGuards(AuthGuard('jwt'))
export class TechStacksController {
  constructor(private readonly techStacksService: TechStacksService) {}

  @Get()
  findAll(): Promise<TechStack[]> {
    return this.techStacksService.findAll();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createOne(@Body() techStackInfo: TechStackDto) {
    return this.techStacksService.createOne(techStackInfo);
  }

  @Put(':no')
  @UsePipes(ValidationPipe)
  updateOneByNo(
    @Param('no', ParseIntPipe) techStackNo: number,
    @Body() techStackInfo: TechStackDto,
  ): Promise<TechStack> {
    return this.techStacksService.updateOneByNo(techStackNo, techStackInfo);
  }

  @Delete(':no')
  deleteOneByNo(@Param('no', ParseIntPipe) techStackNo: number) {
    return this.techStacksService.deleteOneByNo(techStackNo);
  }
}
