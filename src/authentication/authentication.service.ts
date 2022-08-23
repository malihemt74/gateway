import { Injectable } from '@nestjs/common';
import { RegisterAuthenticationDto } from './dto/register-authentication.dto';
import { LoginAuthenticationDto } from './dto/login-authentication.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AuthenticationService {
  constructor(private readonly httpService: HttpService) {}

  async register(registerAuthenticationDto: RegisterAuthenticationDto) {
    const result = await this.httpService.get('localhost:5000/Create');
    console.log(result);
    return result;
  }

  async login(loginAuthenticationDto: LoginAuthenticationDto) {
    return loginAuthenticationDto;
  }
}
