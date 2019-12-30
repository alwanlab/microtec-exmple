import { Controller, Post, Body, Put, Param, UseGuards } from '@nestjs/common';
import { City } from '../dto/city.dto';
import { CityService } from '../services/city.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { BaseController } from 'src/common/base/baseController.controller';

@ApiTags('City')
@Controller('city')
// @UseGuards(AuthGuard('jwt'))
export class CityController extends BaseController {

    constructor(public readonly cityService: CityService) {
        super(cityService);
    }

    @Post()
    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: City,
    })
    async create(@Body() body: City) {
        return await this.cityService.create(body);
    }

    @Put(':id')
    @ApiCreatedResponse({
        description: 'The record has been successfully updated.',
        type: City,
    })
    async update(@Param('id') id: string, @Body() body: City) {
        return await this.cityService.update(id, body);
    }
}
