import { EntityRepository, Repository } from 'typeorm';
import { Header } from '../entities/header.entity';

@EntityRepository(Header)
export class HeaderRepository extends Repository<Header> {}
