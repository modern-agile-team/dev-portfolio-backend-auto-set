import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ContactChannelEntity } from './contactChannel.entity';

@Entity('Contacts')
export class ContactEntity {
  @PrimaryGeneratedColumn({ unsigned: true })
  no: number;

  @Column({ length: 20 })
  title: string;

  @Column({ length: 50 })
  subTitle: string;

  @Column({ length: 20 })
  buttonText: string;

  @OneToMany(
    () => ContactChannelEntity,
    (contactChannel) => contactChannel.contact,
  )
  contactChannels: ContactChannelEntity[];
}
