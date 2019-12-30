import { Controller, Post, Body, Put, Param, UseGuards } from '@nestjs/common';
import { Currency } from '../dto/currency.dto';
import { CurrencyService } from '../services/currency.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { BaseController } from 'src/common/base/baseController.controller';

@ApiTags('Currency')
@Controller('currency')
// @UseGuards(AuthGuard('jwt'))
export class CurrencyController extends BaseController {

    constructor(public readonly currencyService: CurrencyService) {
        super(currencyService);
    }

    @Post()
    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: Currency,
    })
    async create(@Body() body: Currency) {
        return await this.currencyService.create(body);
    }

    @Put(':id')
    @ApiCreatedResponse({
        description: 'The record has been successfully updated.',
        type: Currency,
    })
    async update(@Param('id') id: string, @Body() body: Currency) {
        return await this.currencyService.update(id, body);
    }

}
