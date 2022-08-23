import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterAuthenticationDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
