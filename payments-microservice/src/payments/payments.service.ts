import { Injectable, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePaymentDto } from "./dto/CreatePayment.dto";
import { Payment } from "../typeorm/entities/Payment";
import { ClientProxy } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";
import { User } from "../typeorm/entities/User"; 

@Injectable()
export class PaymentsService {
   constructor(
  @InjectRepository(Payment) private paymentsRepository: Repository<Payment>,
  @Inject('NATS_SERVICE') private natsClient: ClientProxy
) {}
    async createPayment({ userId, ...createPaymentDto }: CreatePaymentDto) {
  const user = await lastValueFrom<User>(
    this.natsClient.send({ cmd: 'getUserById' }, { userId })
  );
  
  console.log('User fetched:', user);

  const newPayment = this.paymentsRepository.create({
    ...createPaymentDto,
    user, // attach user object to the payment
  });

  return this.paymentsRepository.save(newPayment);
}




}

