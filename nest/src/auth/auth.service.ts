import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private secretKey: string;

  constructor() {
    this.secretKey = process.env.SECRET_KEY;
  }

  async createToken(admin: Payload) {
    const payload = { ...admin };

    return jwt.sign(payload, this.secretKey, {
      issuer: 'dev-portfolio',
      expiresIn: '20h',
    });
  }
}
