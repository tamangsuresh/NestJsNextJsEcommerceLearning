import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class MobileInput {
    @Field()
    name: string

    @Field()
    age: number

    @Field()
    type: string
}