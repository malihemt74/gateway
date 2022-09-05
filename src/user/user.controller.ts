import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  OnModuleInit,
  Inject,
  Req,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable, toArray } from 'rxjs';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

interface UsersService {
  register(data): Observable<any>;
  login(data): Observable<any>;
  findAll(metadata: Metadata): Observable<any>;
  findOne(data: { id: number }): Observable<any>;
  update(data): Observable<any>;
  remove(data: { id: number }): Observable<any>;
}

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController implements OnModuleInit {
  private usersService: UsersService;
  constructor(@Inject('USER_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.usersService = this.client.getService<UsersService>('UsersService');
  }

  @ApiOperation({ summary: 'Register' })
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    const result = await this.usersService.register(registerDto);
    return result;
  }

  @ApiOperation({ summary: 'Login' })
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const result = await this.usersService.login(loginDto);
    console.log(result);
    return result;
  }

  @ApiOperation({ summary: 'Get all of the users.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  async findAll(@Req() request) {
    const metadata = new Metadata();
    metadata.set('Authorization', request.headers.authorization);
    const result = await this.usersService.findAll(metadata).pipe(toArray());
    return result;
  }

  @ApiOperation({ summary: 'Get one of the users.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.usersService.findOne({ id: +id });
    return result;
  }

  @ApiOperation({ summary: 'Update a user.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Patch()
  async update(@Body() updateUserDto: UpdateUserDto) {
    const result = await this.usersService.update(updateUserDto);
    return result;
  }

  @ApiOperation({ summary: 'Remove a user.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.usersService.remove({ id: +id });
    return result;
  }
}
