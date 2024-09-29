import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChargeDTO {
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    readonly amount: number;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly document: string;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly phone: string;
}