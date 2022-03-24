import { Field, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class DogDto {
    @Field()
    id: string
    @Field()
    name: string;
    @Field()
    age: number;
    @Field()
    breed: string
}