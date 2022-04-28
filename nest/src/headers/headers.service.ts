import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChannelEntity } from './entities/channel.entity';
import { Repository } from 'typeorm';
import { HeaderEntity } from './entities/header.entity';

@Injectable()
export class HeadersService {
  constructor(
    @InjectRepository(HeaderEntity)
    private headerRepository: Repository<HeaderEntity>,
    @InjectRepository(ChannelEntity)
    private channelRepository: Repository<ChannelEntity>,
  ) {}

  async findAll(): Promise<HeaderEntity> {
    const header: HeaderEntity[] = await this.headerRepository.find({
      relations: ['channels'],
      where: { no: 2 },
    });

    if (!header[0]) throw new NotFoundException();

    return header[0];
  }

  createOne() {
    throw new Error('Method not implemented.');
  }
}
