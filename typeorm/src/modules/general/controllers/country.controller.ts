import { Controller, Post, Body, Put, Param, UseGuards } from '@nestjs/common';
import { Country } from '../dto/country.dto';
import { CountryService } from '../services/country.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { BaseController } from 'src/common/base/baseController.controller';

@ApiTags('Country')
@Controller('country')
// @UseGuards(AuthGuard('jwt'))
export class CountryController extends BaseController {

    constructor(public readonly countryService: CountryService) {
        super(countryService);
    }

    @Post()
    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: Country,
    })
    async create(@Body() body: Country) {
        return await this.countryService.create(body);
    }

    @Put(':id')
    @ApiCreatedResponse({
        description: 'The record has been successfully updated.',
        type: Country,
    })
    async update(@Param('id') id: string, @Body() body: Country) {
        return await this.countryService.update(id, body);
    }

}
