import { IsNotEmpty, IsString, IsEmail, MinLength } from 'class-validator';

export class AdminDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  password: string;
}
