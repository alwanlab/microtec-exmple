import { ApiProperty } from '@nestjs/swagger';
import { Contains, IsOptional, IsBoolean } from 'class-validator';

export class BaseDto {

    @Contains('base64')
    @IsOptional()
    @ApiProperty({
        required: false,
    })
    image?: string;

    @IsBoolean()
    @IsOptional()
    @ApiProperty({
        required: false,
    })
    isActive: boolean;
}
