import { Module } from '@nestjs/common';
import { AdminsModule } from './admins/admins.module';

@Module({
  imports: [AdminsModule],
})
export class AppModule {}
