import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('headers')
export class HeaderEntity {
  @PrimaryGeneratedColumn()
  no: number;

  @Column({ length: 30 })
  title: string;

  @Column({ name: 'logo_url' })
  logoUrl: string;
}
