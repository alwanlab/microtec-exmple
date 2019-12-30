import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountryController } from './controllers/country.controller';
import { CountryService } from './services/country.service';
import { CountrySchema } from './schema/country.schema';
import { CitySchema } from './schema/city.schema';
import { CityController } from './controllers/city.controller';
import { CityService } from './services/city.service';
import { RegionController } from './controllers/region.controller';
import { RegionSchema } from './schema/region.schema';
import { RegionService } from './services/region.service';
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'country', schema: CountrySchema },
            { name: 'city', schema: CitySchema },
            { name: 'region', schema: RegionSchema }]),
    ],
    controllers: [
        CountryController,
        CityController,
        RegionController
    ],
    providers: [
        CountryService,
        CityService,
        RegionService
    ],
})
export class GeneralModule { }
