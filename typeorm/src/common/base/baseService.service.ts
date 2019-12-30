import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class BaseService {
    Model;
    constructor(mo) {
        this.Model = mo;

    }

    async findAll(query, options) {
        return await this.Model.find(query);
    }

    async find(query) {
        return await this.Model.find(query);
    }

    async create(body) {
        try {
            return await this.Model.save(body);
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.METHOD_NOT_ALLOWED);
        }
    }

    async findById(id) {
        try {
            return await this.Model.find({ id });
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.METHOD_NOT_ALLOWED);
        }
    }


    async updateById(id, body) {
        try {
            return await this.Model.update(id, body);
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.METHOD_NOT_ALLOWED);
        }
    }

    async update(conditions, body) {
        try {
            return await this.Model.update(conditions, body);
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.METHOD_NOT_ALLOWED);
        }
    }

    async delete(id) {
        try {
            return await this.Model.delete({ id });
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.METHOD_NOT_ALLOWED);
        }
    }

}
