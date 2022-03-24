import { Field, InputType, Int } from "@nestjs/graphql";
@InputType()
export class GoatInput {
    @Field()
    name: string

    @Field(() => Int)
    age: number

    @Field()
    breed: string
}