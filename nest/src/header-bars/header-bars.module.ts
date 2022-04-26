import { Module } from '@nestjs/common';
import { HeaderBarsService } from './header-bars.service';
import { HeaderBarsController } from './header-bars.controller';

@Module({
  controllers: [HeaderBarsController],
  providers: [HeaderBarsService]
})
export class HeaderBarsModule {}
