import { ContactsService } from './contacts.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('contacts')
export class ContactsController {
  constructor(private contactService: ContactsService) {}

  @Get(':no')
  async findOneByNo(@Param('no') no: number) {
    return await this.contactService.findOneByNo(no);
  }
}
