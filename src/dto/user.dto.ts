import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly document: string;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly phone: string;
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly password: string;
}