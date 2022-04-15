import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contacts')
export class ContactEntity {
  @PrimaryGeneratedColumn()
  no: number;

  @Column({ length: 20 })
  title: string;

  @Column({ length: 50 })
  subTitle: string;

  @Column({ length: 20 })
  buttonText: string;
}
