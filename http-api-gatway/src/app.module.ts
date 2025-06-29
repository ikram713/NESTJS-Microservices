import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NATS_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: ['nats://127.0.0.1:4222'], // ✅ FIXED
        },
      },
    ]),
    UsersModule,
    PaymentsModule,
  ],
})
export class AppModule {}
