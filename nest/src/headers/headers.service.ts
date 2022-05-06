import { Injectable, NotFoundException } from '@nestjs/common';
import { Header } from './entities/header.entity';
import { HeaderDto } from './dto/header.dto';
import { HeaderRepository } from './header.repository';
import { ChannelRepository } from './channel.repository';
import { getConnection } from 'typeorm';
import { Channel } from './entities/channel.entity';

@Injectable()
export class HeadersService {
  constructor(
    private headerRepository: HeaderRepository,
    private channelRepository: ChannelRepository,
  ) {}

  async findOneByNo(headerNo: number): Promise<Header> {
    const header: Header = await this.headerRepository.findOne({
      where: { no: headerNo },
      relations: ['channels'],
    });

    if (!header)
      throw new NotFoundException(`Can't find header with no ${headerNo}`);

    return header;
  }

  async createOne(headerInfo: HeaderDto): Promise<Header> {
    const { title, logoUrl, channels } = headerInfo;

    const header = await this.headerRepository.createHeader(title, logoUrl);

    await this.channelRepository.createChannel(channels, header);

    return await this.headerRepository.findOne({
      where: { no: header.no },
      relations: ['channels'],
    });
  }

  async updateOneByNo(headerNo: number, headerInfo: HeaderDto) {
    const header = {
      title: headerInfo.title,
      logoUrl: headerInfo.logoUrl,
    };

    const updateHeader = await this.headerRepository.update(headerNo, header);

    if (updateHeader.affected) {
      await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Channel)
        .where('header = :no', { no: headerNo })
        .execute();

      // const updateChannel = await this.channelRepository.createChannel(
      //   headerInfo.channels,
      //   headerNo,
      // );
    }
  }
}
