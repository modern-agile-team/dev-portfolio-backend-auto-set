import { ContactsService } from './contacts.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('contact(s){0,1}')
export class ContactsController {
  constructor(private contactService: ContactsService) {}

  @Get(':id')
  findOneById(@Param('id') id: number) {
    return this.contactService.findOneById(id);
  }
}
