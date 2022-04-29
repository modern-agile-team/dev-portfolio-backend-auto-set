import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Channel } from './channel.entity';

@Entity('headers')
export class Header extends BaseEntity {
  @PrimaryGeneratedColumn()
  no: number;

  @Column({ length: 30 })
  title: string;

  @Column({ name: 'logo_url' })
  logoUrl: string;

  @OneToMany(() => Channel, (channel) => channel.header)
  channels: Channel[];
}
