import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

interface IdefaultChat {
  name: string;
  message: string;
}

const defaultChat: IdefaultChat[] = [];

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
@WebSocketGateway()
export class MyGateway implements OnGatewayConnection, OnGatewayInit {
  @WebSocketServer() server: Server;

  afterInit() {
    this.sendDefaultChat();
  }

  handleConnection(client: Socket) {
    this.sendDefaultChat(client);
  }

  sendDefaultChat(client?: Socket) {
    if (client) {
      client.emit('defaultChat', defaultChat);
    } else {
      this.server.emit('defaultChat', defaultChat);
    }
  }

  @SubscribeMessage('sendMessage')
  onNewMessage(@MessageBody() body: IdefaultChat) {
    defaultChat.push(body);
    return body;
  }
}
