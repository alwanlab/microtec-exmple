import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class BaseService {
    Model;
    constructor(mo) {
        this.Model = mo;

    }

    async findAll(query, options) {
        return await this.Model.paginate(query, options);
    }

    async find(query) {
        return await this.Model.find(query);
    }

    async create(body) {
        try {
            return await this.Model.create(body);
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.METHOD_NOT_ALLOWED);
        }
    }

    async findById(id) {
        try {
            return await this.Model.findById(id);
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.METHOD_NOT_ALLOWED);
        }
    }

    async findOne(query) {
        try {
            return await this.Model.findOne(query);
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.METHOD_NOT_ALLOWED);
        }
    }

    async updateById(id, body) {
        try {
            return await this.Model.updateOne({ _id: id }, body);
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.METHOD_NOT_ALLOWED);
        }
    }

    async update(conditions, body) {
        try {
            return await this.Model.updateOne(conditions, body);
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.METHOD_NOT_ALLOWED);
        }
    }

    async delete(id) {
        try {
            return await this.Model.deleteOne({ _id: id });
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.METHOD_NOT_ALLOWED);
        }
    }

}
