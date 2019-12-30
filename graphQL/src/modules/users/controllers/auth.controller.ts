
import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from '../dto/auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Post('authenticationLogin')
    @ApiCreatedResponse({
        type: Auth,
    })
    @HttpCode(HttpStatus.OK)
    async authenticationLogin(@Body() body: Auth) {
        return await this.authService.authenticationLogin(body);
    }

    @Post('authorizationLogin')
    @ApiCreatedResponse({
        type: Auth,
    })
    @HttpCode(HttpStatus.OK)
    async authorizationLogin(@Body() body: Auth) {
        return await this.authService.authorizationLogin(body);
    }
}
