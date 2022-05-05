import { Module } from '@nestjs/common';
import { HeadersService } from './headers.service';
import { HeadersController } from './headers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Header } from './entities/header.entity';
// import { Channel } from './entities/channel.entity';
import { HeaderRepository } from './header.repository';
import { ChannelRepository } from './channel.repository';

@Module({
  imports: [TypeOrmModule.forFeature([HeaderRepository, ChannelRepository])],
  controllers: [HeadersController],
  providers: [HeadersService],
})
export class HeadersModule {}
