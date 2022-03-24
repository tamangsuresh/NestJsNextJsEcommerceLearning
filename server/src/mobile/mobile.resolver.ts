
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MobileDto } from './dto/mobile.dto';
import { MobileInput } from './input/mobile.input';
import { MobileService } from './mobile.service';

@Resolver()
export class MobileResolver {
    constructor(private mobileService: MobileService) { }
    @Query(() => String)
    async mobile() {
        return "This is from Mobile"
    }

    @Query(() => [MobileDto])
    async mobiles() {
        return this.mobileService.findAll()
    }

    @Mutation(() => MobileDto)
    async createMobile(@Args('input') input: MobileInput) {
        return this.mobileService.createMobile(input)
    }
}
