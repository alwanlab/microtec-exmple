import { IsEmail, Length, IsString, IsMobilePhone, IsObject, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from 'src/common/base/baseDto.dto';

export class User extends BaseDto {

    @IsString()
    @Length(3, 250)
    @ApiProperty()
    userName: string;

    @IsEmail()
    @ApiProperty()
    email: string;

    @IsString()
    @ApiProperty()
    password: string;

    @Length(3, 250)
    @ApiProperty()
    fullName: string;

    @IsMobilePhone('ar-EG')
    @ApiProperty()
    phone: string;


    @ApiProperty({ required: false })
    userNotes?: string;
}
