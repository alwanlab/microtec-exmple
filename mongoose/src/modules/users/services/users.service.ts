import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'src/common/base/baseService.service';
@Injectable()
export class UsersService extends BaseService {

    constructor(@InjectModel('users') public readonly model: Model<any>) {
        super(model);
    }

}
