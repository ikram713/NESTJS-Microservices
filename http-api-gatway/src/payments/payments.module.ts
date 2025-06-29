
import { Module } from '@nestjs/common';
import { NatsClientModule } from '../nats-client/nats-client.module'; // Adjust the path if needed
import { PaymentsMicroserviceController } from './payments.controller'; // Adjust the path if needed

@Module({
  imports: [NatsClientModule],
  controllers: [PaymentsMicroserviceController],
  providers: [],
})
export class PaymentsModule {}

