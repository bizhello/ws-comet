import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [ScheduleModule.forRoot(), HttpModule, SocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
