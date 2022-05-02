import { IsNotEmpty } from 'class-validator';

export class HeaderDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  logoUrl: string;

  @IsNotEmpty()
  channels: Array<Channel>;
}

interface Channel {
  name: string;
  url: string;
}
