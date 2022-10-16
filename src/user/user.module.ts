import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/controller/user.controller';
import { User } from './user/entities/user.entity';
import { UserService } from './user/services/user.service';

@Module({
  imports:[ TypeOrmModule.forFeature([User, ])],

  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
