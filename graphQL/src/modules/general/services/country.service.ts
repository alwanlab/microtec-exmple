import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/baseService.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryEntity } from '../entity/country.entity';
@Injectable()
export class CountryService extends BaseService {

    constructor(@InjectRepository(CountryEntity)
     readonly repo: Repository<CountryEntity>) {
        super(repo);
    }

}
