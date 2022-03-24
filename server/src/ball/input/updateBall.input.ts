import { Field, InputType, Int } from "@nestjs/graphql";
@InputType()
export class UpdateBallInput {
    @Field(() => String)
    id: string

    @Field(() => String, { nullable: true })
    name: string

    @Field(() => Int, { nullable: true })
    age: number;

    @Field(() => String, { nullable: true })
    breed: string
}