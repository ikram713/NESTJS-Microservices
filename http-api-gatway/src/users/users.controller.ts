import { Controller, Post, Inject, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { Get, Param } from '@nestjs/common/decorators';

@Controller('users')
export class UsersController {
    
    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
       return  this.natsClient.send({cmd: 'createUser'}, createUserDto)
       
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.natsClient.send({cmd: 'getUserById'}, {userId : id});
    }
}
