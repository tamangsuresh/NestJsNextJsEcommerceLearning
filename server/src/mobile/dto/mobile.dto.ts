import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class MobileDto {
    @Field()
    name: string

    @Field()
    age: string

    @Field()
    type: string
}