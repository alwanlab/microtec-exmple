import { Controller, Post, Body, Put, Param, UseGuards } from '@nestjs/common';
import { Region } from '../dto/region.dto';
import { RegionService } from '../services/region.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { BaseController } from 'src/common/base/baseController.controller';

@ApiTags('Region')
@Controller('region')
// @UseGuards(AuthGuard('jwt'))
export class RegionController extends BaseController {

    constructor(public readonly regionService: RegionService) {
        super(regionService);
    }

    @Post()
    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: Region,
    })
    async create(@Body() body: Region) {
        return await this.regionService.create(body);
    }

    @Put(':id')
    @ApiCreatedResponse({
        description: 'The record has been successfully updated.',
        type: Region,
    })
    async update(@Param('id') id: string, @Body() body: Region) {
        return await this.regionService.update(id, body);
    }

}
