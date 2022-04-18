import { Body, Controller, Post } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminDto } from './dto/admin.dto';

@Controller('admins')
export class AdminsController {
  constructor(private adminsService: AdminsService) {}

  @Post('/login')
  login(@Body() adminDto: AdminDto): Promise<object> {
    return this.adminsService.login(adminDto);
  }
}
