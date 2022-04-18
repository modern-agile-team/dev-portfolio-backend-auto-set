import { Injectable } from '@nestjs/common';
import { AdminDto } from './dto/admin.dto';
@Injectable()
export class AdminsService {
  async login(adminDto: AdminDto): Promise<object> {
    return { adminDto };
  }
}
