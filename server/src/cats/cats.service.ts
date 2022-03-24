import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './cats.schema';
// import { Cat, CatDocument } from './schemas/cat.schema';
import { CreateCatDto } from './dto/cats.dto'
import { CatInput } from './inputs/cat.input';
import { DeleteCatDto } from './dto/deleteCatDto';
import { UpdateCat } from './dto/updateCat';

@Injectable()
export class CatsService {
    constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) { }

    async create(createCatDto: CatInput): Promise<Cat> {
        const createdCat = new this.catModel(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<Cat[]> {
        return this.catModel.find().exec();
    }
    async deleteCat(id: string): Promise<DeleteCatDto> {

        const { deletedCount } = await this.catModel.deleteOne({ _id: id })

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
    async updateByIdCat(input: UpdateCat): Promise<Cat> {
        const updateCat = await this.catModel.findByIdAndUpdate({ _id: input.id }, { name: input.name, age: input.age, breed: input.breed }, { upsert: true },)
        console.log('Update value', updateCat)
        return updateCat.save()
    }
}
