import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminDto } from './dto/admin.dto';

@Injectable()
export class AdminsService {
  constructor(private jwtService: JwtService) {}

  login(adminDto: AdminDto): { token: string } {
    const checkedEmail = process.env.ADMIN_EMAIL;
    const checkedPassword = process.env.ADMIN_PSWORD;
    const { email, password } = adminDto;

    if (email !== checkedEmail || password !== checkedPassword)
      throw new UnauthorizedException('login failed');

    const payload = { email };
    const token = this.jwtService.sign(payload);

    return { token };
  }
}
