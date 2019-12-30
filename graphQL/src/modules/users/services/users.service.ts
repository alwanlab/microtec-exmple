import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/baseService.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity/users.entity';
@Injectable()
export class UsersService extends BaseService {

    constructor(@InjectRepository(UserEntity)
    readonly repo: Repository<UserEntity>) {
        super(repo);
    }

}
