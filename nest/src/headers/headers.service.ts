import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Channel } from './entities/channel.entity';
// import { Repository } from 'typeorm';
import { Header } from './entities/header.entity';
import { HeaderDto } from './dto/header.dto';
import { HeaderRepository } from './header.repository';
import { ChannelRepository } from './channel.repository';

@Injectable()
export class HeadersService {
  constructor(
    private headerRepository: HeaderRepository, // @InjectRepository(Header) // private headerRepository: Repository<Header>, // @InjectRepository(Channel) // private channelRepository: Repository<Channel>,
    private channelRepository: ChannelRepository,
  ) {}

  async findOneById(headerId: number): Promise<Header> {
    const header: Header = await this.headerRepository.findOne({
      where: { no: headerId },
      relations: ['channels'],
    });

    if (!header)
      throw new NotFoundException(`Can't find header with id ${headerId}`);

    return header;
  }

  async createOne(headerInfo: HeaderDto): Promise<Header> {
    const { title, logoUrl, channels } = headerInfo;
    const header = await this.headerRepository.createHeader(title, logoUrl);
    // const header = new Header();

    // header.title = headerInfo.title;
    // header.logoUrl = headerInfo.logoUrl;

    // await this.headerRepository.save(header);

    await this.channelRepository.createChannel(channels, header);
    // for (let i = 0; i < headerInfo.channels.length; i += 1) {
    //   const channelInfo = headerInfo.channels[i];
    //   const channel = new Channel();

    //   channel.name = channelInfo.name;
    //   channel.url = channelInfo.url;
    //   channel.header = header;

    //   await this.channelRepository.save(channel);
    // }

    const savedHeader: Header = await this.headerRepository.findOne({
      where: { no: header.no },
      relations: ['channels'],
    });

    return savedHeader;
  }

  async updateOneById(headerId: number, headerInfo: HeaderDto) {
    const header = {
      title: headerInfo.title,
      logoUrl: headerInfo.logoUrl,
    };

    const result = await this.headerRepository.update(headerId, header);
  }
}
