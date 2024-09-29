import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDTO {
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly password: string;
}