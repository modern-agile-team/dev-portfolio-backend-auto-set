import { IsString, IsEmail, MinLength } from 'class-validator';

export class AdminDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  password: string;
}
