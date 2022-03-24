import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeleteDogDto } from './dto/deleteDogDto';
import { DogDto } from './dto/dot.dto';
import { UpdateDogDot } from './dto/updateDog.dto';
import { DogInput } from './inputs/dog.input';
import { Dog, DogDocument } from './schema/dog.schema';

@Injectable()
export class DogService {
    constructor(@InjectModel(Dog.name) private dogModel: Model<DogDocument>) { }

    async findAll(): Promise<Dog[]> {
        return this.dogModel.find().exec();
    }
    async create(input: DogInput): Promise<Dog> {
        const newDog = new this.dogModel(input)
        return newDog.save()
    }

    async deleteDog(id: string): Promise<DeleteDogDto> {

        const { deletedCount } = await this.dogModel.deleteOne({ _id: id })

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
    async updateByIdDog(input: UpdateDogDot): Promise<Dog> {
        const updateCat = await this.dogModel.findByIdAndUpdate({ _id: input.id }, { name: input.name, age: input.age, breed: input.breed }, { upsert: true },)
        console.log('Update value', updateCat)
        return updateCat.save()
    }
}
