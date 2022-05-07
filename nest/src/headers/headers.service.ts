import { Injectable, NotFoundException } from '@nestjs/common';
import { Header } from './entities/header.entity';
import { HeaderDto } from './dto/header.dto';
import { HeaderRepository } from './repositories/header.repository';
import { ChannelRepository } from './repositories/channel.repository';
import { createQueryBuilder, getConnection } from 'typeorm';
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

  async createOne(headerInfo: HeaderDto): Promise<any> {
    return await this.headerRepository.save(headerInfo);
  }

  async updateOneByNo(headerNo: number, headerInfo: HeaderDto) {
    const header = {
      title: headerInfo.title,
      logoUrl: headerInfo.logoUrl,
    };

    const updateHeader = await this.headerRepository.update(headerNo, header);

    if (updateHeader.affected) {
      // await getConnection()
      //   .createQueryBuilder()
      //   .delete()
      //   .from(Channel)
      //   .where('header = :no', { no: headerNo })
      //   .execute();

      // const result = await getConnection()
      //   .createQueryBuilder()
      //   .select('channel')
      //   .from(Channel, 'channel')
      //   .where('channel.no = :no', { no: 4 })
      //   .getOne();

      // const header = await getConnection().manager.findOne(Header, headerNo);

      // const result = await createQueryBuilder('Channel')
      //   .leftJoinAndSelect('Channel.header', 'headers')
      //   .where('Channel.header.no = :headerNo', { headerNo: headerNo })
      //   .getMany();

      const header = await createQueryBuilder('Header')
        .where('Header.no = :no', { no: headerNo })
        .getOne();

      console.log(header);
    }
  }
}
