import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

const defaultChat = [
  {
    name: 'Вася',
    message: 'asdasdasdas',
  },
  {
    name: 'Петя',
    message: 'asdasdasdas',
  },
  {
    name: 'Гена',
    message: 'asdasdasdas',
  },
];

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MyGateway {
  @SubscribeMessage('newMessage')
  onNewMessage(@MessageBody() body: any) {
    defaultChat.push(body);
    return defaultChat;
  }
}
