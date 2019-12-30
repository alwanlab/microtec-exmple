import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'src/common/base/baseService.service';
@Injectable()
export class CityService extends BaseService {

    constructor(@InjectModel('city') public readonly model: Model<any>) {
        super(model);
    }

}
