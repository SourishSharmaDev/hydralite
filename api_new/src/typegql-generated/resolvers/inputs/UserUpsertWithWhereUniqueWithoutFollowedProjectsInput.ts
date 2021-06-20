import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFollowedProjectsInput } from "../inputs/UserCreateWithoutFollowedProjectsInput";
import { UserUpdateWithoutFollowedProjectsInput } from "../inputs/UserUpdateWithoutFollowedProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutFollowedProjectsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFollowedProjectsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFollowedProjectsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFollowedProjectsInput, {
    nullable: false
  })
  create!: UserCreateWithoutFollowedProjectsInput;
}
