import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeleteGoatDto } from './dto/deleteGoat.dto';
import { Goat, GoatDocument } from './goat.schema';
import { GoatInput } from './input/goat.input';
import { UpdateGoatInput } from './input/updateGoat.input';

@Injectable()
export class GoatService {
    constructor(@InjectModel(Goat.name) private goatModel: Model<GoatDocument>) { }

    async findAll(): Promise<Goat[]> {
        return this.goatModel.find().exec();
    }
    async createGoat(goat: GoatInput): Promise<Goat> {
        const newGoat = new this.goatModel(goat)
        return newGoat.save();
    }

    async deleteGoat(id: string): Promise<DeleteGoatDto> {
        const { deletedCount } = await this.goatModel.deleteOne({ _id: id })

        if (deletedCount == 1) {
            return {
                data: "Item is deleted successfully"
            }
        } else {
            return {
                data: "No item to delete."
            }
        }


    }
    async updateByIdGoat(input: UpdateGoatInput): Promise<Goat> {
        const updateBall = await this.goatModel.findByIdAndUpdate({ _id: input.id }, { name: input.name, age: input.age, breed: input.breed }, { upsert: true },)
        console.log('Update value', updateBall)
        return updateBall.save()
    }
}
