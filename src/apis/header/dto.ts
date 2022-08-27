import { RowDataPacket } from 'mysql2';

export interface HeaderDto extends RowDataPacket {
  id: number;
  logoUrl: string;
  logoImageUrl: string;
  title: string;
}
