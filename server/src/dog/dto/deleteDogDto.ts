import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class DeleteDogDto {
    @Field()
    data: string
}