import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto/cats.dto";
import { DeleteCatDto } from "./dto/deleteCatDto";
import { UpdateCat } from "./dto/updateCat";
import { CatInput } from "./inputs/cat.input";
import { UpdateCatInput } from "./inputs/updateCat";

@Resolver()
export class CatsResolver {
    constructor(private catsService: CatsService) { }

    @Query(() => String)
    async hello() {
        return "Hello";
    }
    @Query(() => [CreateCatDto])
    async cats() {
        return this.catsService.findAll()
    }
    @Mutation(() => CreateCatDto)
    async createCat(@Args('input') input: CatInput) {
        return this.catsService.create(input)
    }
    @Mutation(() => DeleteCatDto)
    async deleteCat(@Args('id') id: string) {
        // console.log('Ball input', input)
        return this.catsService.deleteCat(id)
    }

    @Mutation(() => UpdateCat)
    async updateByIdCat(@Args('input') input: UpdateCatInput) {
        // console.log('Ball input', input)
        return this.catsService.updateByIdCat(input)
    }
}


