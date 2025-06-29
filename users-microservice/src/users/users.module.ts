import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersMicroserviceController } from './users.controller';
import { UsersService } from './users.service';
import { User } from '../typeorm/entities/User';
import { Payment } from '../typeorm/entities/Payment'; 


@Module({
  imports: [TypeOrmModule.forFeature([User, Payment])], 
  controllers: [UsersMicroserviceController],
  providers: [UsersService],
  exports: [],
})
export class UsersModule {}


