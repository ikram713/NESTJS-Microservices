import { IsNotEmpty, IsNumber } from "class-validator";


export class CreatePaymentDto {

    @IsNumber()
    amount: number;

    @IsNotEmpty()
    userId: string;
}