import { IsString, IsObject, IsMongoId, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from 'src/common/base/baseDto.dto';

export class Region extends BaseDto {

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

    @IsMongoId()
    @ApiProperty({
        description: 'i18n {ar,en}',
    })
    countryId: string;

    @IsMongoId()
    @ApiProperty({
        description: 'i18n {ar,en}',
    })
    cityId: string;
}
