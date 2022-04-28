import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChannelEntity } from './entities/channel.entity';
import { Repository } from 'typeorm';
import { HeaderEntity } from './entities/header.entity';
// import { Header } from './interfaces/header.interface';

@Injectable()
export class HeadersService {
  constructor(
    @InjectRepository(HeaderEntity)
    private headerRepository: Repository<HeaderEntity>,
    @InjectRepository(ChannelEntity)
    private channelRepository: Repository<ChannelEntity>,
  ) {}

  async findAll(): Promise<any> {
    const header = await this.headerRepository.find();
    console.log(header);
    const channels = await this.channelRepository.find();
    console.log(channels);

    const result = {
      ...header[0],
      channels,
    };

    return result;
  }
}
