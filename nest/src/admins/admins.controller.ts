import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminDto } from './dto/admin.dto';

@Controller('admins')
export class AdminsController {
  constructor(private adminsService: AdminsService) {}

  @Post('/login')
  @UsePipes(ValidationPipe)
  login(@Body() adminDto: AdminDto): { token: string } {
    return this.adminsService.login(adminDto);
  }
}
