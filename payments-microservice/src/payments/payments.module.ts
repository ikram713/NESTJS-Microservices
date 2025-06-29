import { Module } from '@nestjs/common';
import { PaymentsMicroserviceController } from './payments.controller';
import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { PaymentsService } from './payments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from '../typeorm/entities/Payment';
@Module({
    imports: [NatsClientModule , TypeOrmModule.forFeature([Payment])],
    controllers: [PaymentsMicroserviceController],
    providers: [PaymentsService],
})
export class PaymentsModule {
}