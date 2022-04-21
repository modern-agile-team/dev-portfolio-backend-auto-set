import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminDto } from './dto/admin.dto';
import { userConstants } from './constants';

@Injectable()
export class AdminsService {
  constructor(private jwtService: JwtService) {}

  login(adminDto: AdminDto): { token: string } {
    const checkedEmail = userConstants.email;
    const checkedPassword = userConstants.password;
    const { email, password } = adminDto;

    if (email !== checkedEmail || password !== checkedPassword)
      throw new UnauthorizedException('login failed');

    const payload = { email };
    const token = this.jwtService.sign(payload);

    return { token };
  }
}
