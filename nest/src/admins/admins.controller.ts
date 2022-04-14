import { Body, Controller, Post } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CheckAdminDto } from './dto/check-admin.dto';

@Controller('admins')
export class AdminsController {
  constructor(private adminsService: AdminsService) {}

  @Post()
  login(@Body() loginInfo: CheckAdminDto) {
    const await = this.adminsService.login(loginInfo);
  }
}
