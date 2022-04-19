import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AdminDto } from './dto/admin.dto';

@Injectable()
export class AdminsService {
  async login(adminDto: AdminDto): Promise<void> {
    const checkedEmail = process.env.ADMIN_EMAIL;
    const checkedPassword = process.env.ADMIN_PSWORD;
    const { email, password } = adminDto;

    if (email !== checkedEmail || password !== checkedPassword)
      throw new UnauthorizedException('Fail login');
    // token 생성 코드
    // return jwt
    else throw new BadRequestException('The token has not yet been created');
  }
}
