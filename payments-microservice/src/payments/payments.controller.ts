import { Controller, Inject } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { CreatePaymentDto } from "./dto/CreatePayment.dto";
import { ClientProxy } from "@nestjs/microservices";
import { PaymentsService } from "./payments.service";
@Controller('payments')
export class PaymentsMicroserviceController {

    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy , private paymentsService: PaymentsService) {}


  @EventPattern('create_payment')
async createPayment(@Payload() createPaymentDto: CreatePaymentDto) {
  console.log('Received create_payment event:', createPaymentDto); 
  const newPayment = await this.paymentsService.createPayment(createPaymentDto);
  console.log('Payment created:', newPayment);
  this.natsClient.emit('paymentCreated', newPayment);
}

    
}