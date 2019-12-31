import { Module } from '@nestjs/common';

import { UsersService } from './services/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from 'src/common/strategy/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/users.entity';
import { UsersResolver } from './resolvers/users.resolver';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
        PassportModule,
        JwtModule.register({
            secret: process.env.SECRET_KEY,
            signOptions: { expiresIn: '7d' },
        })
    ],
    controllers: [],
    providers: [
        UsersService,
        JwtStrategy,
        UsersResolver
    ]
})
export class UsersModule { }
