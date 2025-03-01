import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentType } from "../../enums/AttachmentType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AttachmentMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  attachmentURL!: string | null;

  @TypeGraphQL.Field(_type => AttachmentType, {
    nullable: true
  })
  type!: "image" | "video" | "other" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postId!: string | null;
}
