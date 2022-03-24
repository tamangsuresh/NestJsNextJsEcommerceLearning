import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class DeleteGoatDto {
    @Field()
    data: string
}