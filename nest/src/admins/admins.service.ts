import { Injectable } from '@nestjs/common';
// import { CheckAdminDto } from './dto/check-admin.dto';

@Injectable()
export class AdminsService {
  async login(): Promise<object> {
    return { statusCode: 201, message: 'success login' };
    // const isExist = await
  }
}
