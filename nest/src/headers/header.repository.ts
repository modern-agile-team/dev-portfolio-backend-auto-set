import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Header } from './entities/header.entity';

@EntityRepository(Header)
export class HeaderRepository extends Repository<Header> {
  async findOneById(headerId: number) {
    const header: Header = await this.findOne({
      where: { no: headerId },
      relations: ['channels'],
    });

    if (!header)
      throw new NotFoundException(`Can't find header with id ${headerId}`);

    return header;
  }
}
