import { Controller, Post, Body } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { RegisterAuthenticationDto } from './dto/register-authentication.dto';
import { LoginAuthenticationDto } from './dto/login-authentication.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('register')
  async register(@Body() registerAuthenticationDto: RegisterAuthenticationDto) {
    return this.authenticationService.register(registerAuthenticationDto);
  }

  @Post('login')
  async login(@Body() loginAuthenticationDto: LoginAuthenticationDto) {
    return this.authenticationService.login(loginAuthenticationDto);
  }
}
