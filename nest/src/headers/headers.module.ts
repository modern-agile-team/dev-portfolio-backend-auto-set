import { Module } from '@nestjs/common';
import { HeadersService } from './headers.service';
import { HeadersController } from './headers.controller';

@Module({
  controllers: [HeadersController],
  providers: [HeadersService],
})
export class HeadersModule {}
