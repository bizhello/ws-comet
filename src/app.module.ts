import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatewayModule } from './gateway/gateway.module';

@Module({
  imports: [ScheduleModule.forRoot(), HttpModule, GatewayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
