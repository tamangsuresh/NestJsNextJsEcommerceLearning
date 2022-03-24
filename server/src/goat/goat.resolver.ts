import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DeleteGoatDto } from './dto/deleteGoat.dto';
import { GoatDto } from './dto/goat.dto';
import { GoatService } from './goat.service';
import { GoatInput } from './input/goat.input';
import { UpdateGoatInput } from './input/updateGoat.input';

@Resolver()
export class GoatResolver {
    constructor(private goatService: GoatService) { }

    @Query(() => String)
    async goatHello() {
        return "This text is from goat.";
    }

    @Query(() => [GoatDto])
    async goats() {
        return this.goatService.findAll()
    }

    @Mutation(() => GoatDto)
    async createGoat(@Args('input') input: GoatInput) {
        return this.goatService.createGoat(input)
    }



    @Mutation(() => DeleteGoatDto)
    async deleteGoat(@Args('id') id: string) {
        // console.log('Ball input', inpu)
        return this.goatService.deleteGoat(id)
    }

    @Mutation(() => GoatDto)
    async updateByIdGoat(@Args('input') input: UpdateGoatInput) {
        // console.log('Ball input', input)
        return this.goatService.updateByIdGoat(input)
    }

}
