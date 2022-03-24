import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CreateCatDto {
    @Field()
    id: string

    @Field()
    readonly name: string;

    @Field(() => Int)
    readonly age: number;

    @Field()
    readonly breed: string;
}