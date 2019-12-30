import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from 'src/common/base/baseDto.dto';

export class Currency extends BaseDto {

    @IsString()
    @IsOptional()
    @ApiProperty({ required: false })
    code?: string;

    @IsString()
    @ApiProperty()
    nameAr: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ required: false })
    nameEn?: string;
}
