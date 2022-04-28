import { Module } from '@nestjs/common';
import { HeadersService } from './headers.service';
import { HeadersController } from './headers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeaderEntity } from './entities/header.entity';
import { ChannelEntity } from './entities/channel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HeaderEntity, ChannelEntity])],
  controllers: [HeadersController],
  providers: [HeadersService],
})
export class HeadersModule {}
