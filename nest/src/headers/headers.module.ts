import { Module } from '@nestjs/common';
import { HeadersService } from './headers.service';
import { HeadersController } from './headers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeaderRepository } from './repositories/header.repository';
import { ChannelRepository } from './repositories/channel.repository';

@Module({
  imports: [TypeOrmModule.forFeature([HeaderRepository, ChannelRepository])],
  controllers: [HeadersController],
  providers: [HeadersService],
})
export class HeadersModule {}
