import { Body, Controller, Post} from '@nestjs/common';
import { AdminsService } from './admins.service';

@Controller('admins')
export class AdminsController {
  constructor(private adminsService: AdminsService) {}

  @Post()
  login(@Body()) {
    const await = this.adminsService.login(request);
  }
}
