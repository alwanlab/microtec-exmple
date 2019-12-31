import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { JwtStrategy } from 'src/common/strategy/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/users.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
        PassportModule,
        JwtModule.register({
            secret: process.env.SECRET_KEY,
            signOptions: { expiresIn: '7d' },
        })
    ],
    controllers: [UsersController],
    providers: [
        UsersService,
        JwtStrategy,
    ]
})
export class UsersModule { }
