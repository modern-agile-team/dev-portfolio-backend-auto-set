import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ChannelEntity } from './channel.entity';

@Entity('headers')
export class HeaderEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  no: number;

  @Column({ length: 30 })
  title: string;

  @Column({ name: 'logo_url' })
  logoUrl: string;

  @OneToMany(() => ChannelEntity, (channel) => channel.header)
  channels: ChannelEntity[];
}
