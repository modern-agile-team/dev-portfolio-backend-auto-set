import { Module } from '@nestjs/common';
import { AdminsModule } from './admins/admins.module';
import { ContactController } from './contact/contact.controller';

@Module({
  imports: [AdminsModule],
  controllers: [ContactController],
})
export class AppModule {}
