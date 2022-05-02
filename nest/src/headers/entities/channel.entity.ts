import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Header } from './header.entity';

@Entity('channels_in_header')
export class Channel extends BaseEntity {
  @PrimaryGeneratedColumn()
  no: number;

  @Column({ length: 20 })
  name: string;

  @Column()
  url: string;

  @ManyToOne(() => Header, (header) => header.channels)
  @JoinColumn({ name: 'header_no' })
  header: Header;
}
