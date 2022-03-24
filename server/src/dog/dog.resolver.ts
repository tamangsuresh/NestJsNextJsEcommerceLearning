import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { DogService } from "./dog.service";
import { DeleteDogDto } from "./dto/deleteDogDto";
import { DogDto } from "./dto/dot.dto";
import { UpdateDogDot } from "./dto/updateDog.dto";
import { DogInput } from "./inputs/dog.input";
import { UpdateDogInput } from "./inputs/updateDog.input";

@Resolver()
export class DogResolver {
    constructor(private dogsService: DogService) { }
    @Query(() => String)
    async helloDogs() {
        return "Dogs"
    }

    @Query(() => [DogDto])
    async dogs() {
        return this.dogsService.findAll()
    }

    @Mutation(() => DogDto)
    async createDog(@Args('input') input: DogInput) {
        return this.dogsService.create(input);
    }

    @Mutation(() => DeleteDogDto)
    async deleteDog(@Args('id') id: string) {
        // console.log('Ball input', input)
        return this.dogsService.deleteDog(id)
    }

    @Mutation(() => UpdateDogDot)
    async updateByIdDog(@Args('input') input: UpdateDogInput) {
        // console.log('Ball input', input)
        return this.dogsService.updateByIdDog(input)
    }
}