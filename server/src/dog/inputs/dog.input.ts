import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class DogInput {

    @Field()
    name: string;

    @Field(() => Int)
    readonly age: number;

    @Field()
    breed: string
}