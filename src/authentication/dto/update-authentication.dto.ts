import { PartialType } from '@nestjs/mapped-types';
import { RegisterAuthenticationDto } from './register-authentication.dto';

export class UpdateAuthenticationDto extends PartialType(
  RegisterAuthenticationDto,
) {}
