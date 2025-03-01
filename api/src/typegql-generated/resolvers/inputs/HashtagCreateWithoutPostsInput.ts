import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutCreatedHashtagsInput } from "../inputs/UserCreateNestedOneWithoutCreatedHashtagsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagCreateWithoutPostsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  numOfPosts!: bigint;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCreatedHashtagsInput, {
    nullable: false
  })
  creator!: UserCreateNestedOneWithoutCreatedHashtagsInput;
}
