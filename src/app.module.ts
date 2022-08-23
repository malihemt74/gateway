import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserModule } from './admin/user/user.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthenticationModule, UserModule],
  controllers: [AppController],
  providers: [AppService, JwtService],
})
export class AppModule {}
