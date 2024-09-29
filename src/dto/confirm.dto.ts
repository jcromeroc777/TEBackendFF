import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ConfirmPaymentDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly token: string;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly session_id: string;
}