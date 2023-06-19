import { NestFactory } from '@nestjs/core';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { AppModule } from './app.module';
import * as socketio from 'socket.io';

class SocketIoAdapter extends IoAdapter {
  createIOServer(
    port: number,
    options?: socketio.ServerOptions,
  ): socketio.Server {
    return super.createIOServer(port, options);
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new SocketIoAdapter(app));
  await app.listen(3000);
}
bootstrap();
