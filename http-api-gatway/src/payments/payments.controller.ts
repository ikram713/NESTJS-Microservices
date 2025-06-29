import { Controller, Post, Inject, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePaymentDto } from './dto/CreatePayment.dto';

@Controller('payments')
export class PaymentsMicroserviceController {
    
    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}


    @Post()
    createPayment(@Body() createPaymentDto: CreatePaymentDto) {
        this.natsClient.emit('create_payment', createPaymentDto);

    }
}
