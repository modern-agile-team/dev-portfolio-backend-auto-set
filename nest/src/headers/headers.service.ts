import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChannelEntity } from './entities/channel.entity';
import { Repository } from 'typeorm';
import { HeaderEntity } from './entities/header.entity';
import { HeaderDto } from './dto/header.dto';
import { HeaderRepository } from './header.repository';

@Injectable()
export class HeadersService {
  constructor(
    @InjectRepository(HeaderRepository)
    private headerRepository: HeaderRepository,
    @InjectRepository(ChannelEntity)
    private channelRepository: Repository<ChannelEntity>,
  ) {}

  async findAllById(headerId: number): Promise<HeaderEntity> {
    const header: HeaderEntity = await this.headerRepository.findOne({
      where: { no: headerId },
      relations: ['channels'],
    });

    if (!header)
      throw new NotFoundException(`Can't find header with id ${headerId}`);

    return header;
  }

  createOne(header: HeaderDto) {
    throw new Error('Method not implemented.');
  }
}
