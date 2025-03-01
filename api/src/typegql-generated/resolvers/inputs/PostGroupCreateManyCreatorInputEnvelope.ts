import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostGroupCreateManyCreatorInput } from "../inputs/PostGroupCreateManyCreatorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupCreateManyCreatorInputEnvelope {
  @TypeGraphQL.Field(_type => [PostGroupCreateManyCreatorInput], {
    nullable: false
  })
  data!: PostGroupCreateManyCreatorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
