import { Module } from '@nestjs/common';
import { AdminsModule } from './admins/admins.module';
import { ContactController } from './contact/contact.controller';
import { ContactService } from './contact/contact.service';

@Module({
  imports: [AdminsModule],
  controllers: [ContactController],
  providers: [ContactService],
})
export class AppModule {}
