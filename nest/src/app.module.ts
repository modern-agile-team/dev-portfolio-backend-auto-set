import { Module } from '@nestjs/common';
import { AdminsModule } from './admins/admins.module';
import { ContactsController } from './contacts/contacts.controller';
import { ContactsService } from './contacts/contacts.service';

@Module({
  imports: [AdminsModule],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class AppModule {}
