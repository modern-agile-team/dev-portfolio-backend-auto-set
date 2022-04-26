import { Injectable } from '@nestjs/common';
import { CreateHeaderBarDto } from './dto/create-header-bar.dto';
import { UpdateHeaderBarDto } from './dto/update-header-bar.dto';

@Injectable()
export class HeaderBarsService {
  create(createHeaderBarDto: CreateHeaderBarDto) {
    return 'This action adds a new headerBar';
  }

  findAll() {
    return `This action returns all headerBars`;
  }

  findOne(id: number) {
    return `This action returns a #${id} headerBar`;
  }

  update(id: number, updateHeaderBarDto: UpdateHeaderBarDto) {
    return `This action updates a #${id} headerBar`;
  }

  remove(id: number) {
    return `This action removes a #${id} headerBar`;
  }
}
