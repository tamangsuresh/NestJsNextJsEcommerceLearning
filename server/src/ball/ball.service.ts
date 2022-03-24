import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ball, BallDocument } from './ball.schema';
import { DeleteBallDto } from './dto/delete.dto';
import { UpdateBall } from './dto/updateBall.dto';
import { BallInput } from './input/ball.input';

@Injectable()
export class BallService {
    constructor(@InjectModel(Ball.name) private ballModal: Model<BallDocument>) { }

    async findAll(): Promise<Ball[]> {
        return this.ballModal.find().exec()
    }

    async create(ball: BallInput): Promise<Ball> {
        const newBall = new this.ballModal(ball)
        console.log('Ball create', newBall)
        return newBall.save()
    }
    async deleteBall(id: string): Promise<DeleteBallDto> {
        const { deletedCount } = await this.ballModal.deleteOne({ _id: id })

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
    async updateByIdBall(input: UpdateBall): Promise<Ball> {
        const updateBall = await this.ballModal.findByIdAndUpdate({ _id: input.id }, { name: input.name, age: input.age, breed: input.breed }, { upsert: true },)
        console.log('Update value', updateBall)
        return updateBall.save()
    }

}
