import { ContactService } from './contact.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get(':id')
  findOneById(@Param('id') id: number) {
    return this.contactService.findOneById(id);
  }
}
