import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ContactEntity } from './contact.entity';

@Entity('ContactChannels')
export class ContactChannelEntity {
  @PrimaryGeneratedColumn({ unsigned: true })
  no: number;

  @Column({ length: 20 })
  name: string;

  @Column({ length: 255 })
  url: string;

  @ManyToOne(() => ContactEntity, (contact) => contact.contactChannels)
  contact: ContactEntity;
}
