import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BallService } from './ball.service';
import { BallDto } from './dto/ball.dto';
import { DeleteBallDto } from './dto/delete.dto';
import { UpdateBall } from './dto/updateBall.dto';
import { BallInput } from './input/ball.input';
import { UpdateBallInput } from './input/updateBall.input';

@Resolver()
export class BallResolver {
    constructor(private ballsService: BallService) { }

    @Query(() => String)
    async hellBall() {
        return "From Ball"
    }

    @Query(() => [BallDto])
    async balls() {
        return this.ballsService.findAll()
    }

    @Mutation(() => BallDto)
    async createBall(@Args('input') input: BallInput) {
        // console.log('Ball input', input)
        return this.ballsService.create(input)
    }
    @Mutation(() => DeleteBallDto)
    async deleteBall(@Args('id') id: string) {
        // console.log('Ball input', input)
        return this.ballsService.deleteBall(id)
    }

    @Mutation(() => UpdateBall)
    async updateByIdBall(@Args('input') input: UpdateBallInput) {
        // console.log('Ball input', input)
        return this.ballsService.updateByIdBall(input)
    }

}
