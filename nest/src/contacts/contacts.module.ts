import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { ContactEntity } from './entities/contact.entity';
import { ContactChannelEntity } from './entities/contactChannel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactEntity, ContactChannelEntity])],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
