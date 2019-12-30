import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'src/common/base/baseService.service';
@Injectable()
export class CurrencyService extends BaseService {

    constructor(@InjectModel('currency') public readonly model: Model<any>) {
        super(model);
    }

}
