import { Controller, Post, Body, Query, Get, Put, Delete, Param, UseGuards, Req, HttpCode, HttpStatus } from '@nestjs/common';
import { User } from '../dto/users.dto';
import { UsersService } from '../services/users.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { BaseController } from 'src/common/base/baseController.controller';

@ApiTags('Users')
@Controller('users')
// @UseGuards(AuthGuard('jwt'))
export class UsersController extends BaseController {

    constructor(public readonly usersService: UsersService) {
        super(usersService);
    }
    @Post()
    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: User,
    })
    async create(@Body() body: User) {
        return await this.usersService.create(body);
    }

    @Put(':id')
    @ApiCreatedResponse({
        description: 'The record has been successfully updated.',
        type: User,
    })
    async update(@Param('id') id: string, @Body() body: User) {
        return await this.usersService.updateById(id, body);
    }

}
