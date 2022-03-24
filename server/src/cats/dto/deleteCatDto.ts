import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class DeleteCatDto {
    @Field()
    data: string
}