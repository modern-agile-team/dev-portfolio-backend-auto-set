import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Header } from './header.entity';

@Entity('channels_in_header')
export class Channel {
  @PrimaryGeneratedColumn()
  no: number;

  @Column({ length: 20 })
  name: string;

  @Column()
  url: string;

  @OneToOne(() => Header)
  @JoinColumn()
  headerNo: Header;
}
