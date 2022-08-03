import { RowDataPacket } from 'mysql2';

export interface VisitorDto extends RowDataPacket {
  visitorCount: number;
}

export interface VisitorCmtDto {
  nickname: string;
  password: string;
  description: string;
  date: string;
}

export interface VisitorCmtEntity {
  nickname: string;
  password: string;
  description: string;
  date: string;
  salt: string;
}
