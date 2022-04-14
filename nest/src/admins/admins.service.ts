import { Injectable } from '@nestjs/common';
import { CheckAdminDto } from './dto/check-admin.dto';

@Injectable()
export class AdminsService {
  async login(loginInfo: CheckAdminDto) {
    const { email, password } = loginInfo;

    // const isExist = await
  }
}
