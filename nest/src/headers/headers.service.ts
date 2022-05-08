import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Header } from './entities/header.entity';
import { HeaderDto } from './dto/header.dto';
import { HeaderRepository } from './repositories/header.repository';

@Injectable()
export class HeadersService {
  constructor(private headerRepository: HeaderRepository) {}

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
    const header: Header = await this.headerRepository.save(headerInfo);

    return header;
  }

  async updateOneByNo(
    headerNo: number,
    headerInfo: HeaderDto,
  ): Promise<Header> {
    const isDelete = await this.headerRepository.delete({ no: headerNo });

    if (isDelete.affected) {
      const header: Header = await this.headerRepository.save(headerInfo);

      return header;
    }
    throw new InternalServerErrorException(
      `Can't update header with no ${headerNo}`,
    );
  }
}
