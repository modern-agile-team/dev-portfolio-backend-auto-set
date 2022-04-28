import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { HeaderEntity } from './header.entity';

@Entity('channels_in_header')
export class ChannelEntity {
  @PrimaryGeneratedColumn()
  no: number;

  @Column({ length: 20 })
  name: string;

  @Column()
  url: string;

  @ManyToOne(() => HeaderEntity, (header) => header.channels)
  header: HeaderEntity;
}
