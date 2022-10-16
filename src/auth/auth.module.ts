import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';

@Module({

  imports: [
    JwtModule.register({
      secret: 'abcd123456',
      signOptions: {
        expiresIn: '60s'
      }
    }), UserModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategyService]
})
export class AuthModule { }
