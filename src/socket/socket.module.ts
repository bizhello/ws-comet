import { Module } from '@nestjs/common';
import { MyGateway } from './socketGateway';

@Module({
  providers: [MyGateway],
})
export class SocketModule {}
