import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { RegisterAuthenticationDto } from './dto/register-authentication.dto';
import { LoginAuthenticationDto } from './dto/login-authentication.dto';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface UserService {
  findOne(id): Observable<{ id; username; email; password }>;
  findAll(
    upstream: Observable<{ id }>,
  ): Observable<{ id; username; email; password }>;
}

@Injectable()
export class AuthenticationService implements OnModuleInit {
  private userService: UserService;

  constructor(@Inject('user') private client: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.client.getService<UserService>('UsersService');
  }

  async register(registerAuthenticationDto: RegisterAuthenticationDto) {
    const result = this.userService.findOne(registerAuthenticationDto['id']);
    return registerAuthenticationDto;
  }

  async login(loginAuthenticationDto: LoginAuthenticationDto) {
    return loginAuthenticationDto;
  }
}
