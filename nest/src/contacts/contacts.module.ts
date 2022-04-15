import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { ContactEntity } from './entities/contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactEntity])],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
