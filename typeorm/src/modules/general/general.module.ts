import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountryController } from './controllers/country.controller';
import { CountryService } from './services/country.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryEntity } from './entity/country.entity';
@Module({
    imports: [
        TypeOrmModule.forFeature([CountryEntity]),
    ],
    controllers: [
        CountryController,
    ],
    providers: [
        CountryService,
    ],
})
export class GeneralModule { }
