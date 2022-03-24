import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MobileInput } from './input/mobile.input';
import { Mobile, MobileDocument } from './mobile.schema';

@Injectable()
export class MobileService {
    constructor(@InjectModel(Mobile.name) private mobileModal: Model<MobileDocument>) { }

    async findAll(): Promise<Mobile[]> {
        return this.mobileModal.find().exec()
    }

    async createMobile(input: MobileInput): Promise<Mobile> {
        const newMobile = new this.mobileModal(input)
        return newMobile.save()
    }
}
