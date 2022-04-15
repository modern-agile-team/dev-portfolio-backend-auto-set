import { Module } from '@nestjs/common';
import { AdminsModule } from './admins/admins.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [AdminsModule, ContactsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
