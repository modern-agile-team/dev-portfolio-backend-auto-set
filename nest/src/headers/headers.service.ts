import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Header } from './entities/header.entity';
import { HeaderDto } from './dto/header.dto';
import { HeaderRepository } from './repositories/header.repository';
import { Connection } from 'typeorm';

@Injectable()
export class HeadersService {
  constructor(
    private headerRepository: HeaderRepository,
    private connection: Connection,
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
    const header: Header = await this.headerRepository.save(headerInfo);

    return header;
  }

  async updateOneByNo(
    headerNo: number,
    headerInfo: HeaderDto,
  ): Promise<Header> {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const isDelete = await this.headerRepository.delete({ no: headerNo });

      if (isDelete.affected) {
        const header: Header = await this.headerRepository.save(headerInfo);

        return header;
      }
    } catch (error) {
      await queryRunner.rollbackTransaction();

      throw new InternalServerErrorException(`Can't create header`);
    } finally {
      await queryRunner.release();
    }
  }
}
