import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TechStackDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  gauage: number;
}
