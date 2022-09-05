import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    example: 'abc@de.com',
    description: "The user's Email address.",
  })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '123', description: "The user's password." })
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 'Malihe', description: "The user's username." })
  @IsNotEmpty()
  username: string;
}
