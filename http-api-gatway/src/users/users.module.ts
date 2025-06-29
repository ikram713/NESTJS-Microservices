import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { NatsClientModule } from '../nats-client/nats-client.module'; // Adjust the path if needed

@Module({
  imports: [NatsClientModule],
  controllers: [UsersController],
})
export class UsersModule {}

