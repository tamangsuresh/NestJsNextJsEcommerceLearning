import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class GoatDto {
    @Field()
    id: string

    @Field()
    name: string

    @Field()
    age: number

    @Field()
    breed: string
}