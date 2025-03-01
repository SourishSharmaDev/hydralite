import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutProfileInput } from "../inputs/UserCreateNestedOneWithoutProfileInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  avatarURL!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bio!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProfileInput, {
    nullable: true
  })
  user?: UserCreateNestedOneWithoutProfileInput | undefined;
}
