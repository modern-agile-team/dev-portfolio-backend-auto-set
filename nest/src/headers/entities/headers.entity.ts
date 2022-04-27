import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('headers')
export class Header {
  @PrimaryGeneratedColumn()
  no: number;

  @Column({ length: 30 })
  title: string;

  @Column()
  lgoUrl: string;
}
