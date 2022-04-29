import { EntityRepository, Repository } from 'typeorm';
import { HeaderEntity } from './entities/header.entity';

@EntityRepository(HeaderEntity)
export class HeaderRepository extends Repository<HeaderEntity> {}
