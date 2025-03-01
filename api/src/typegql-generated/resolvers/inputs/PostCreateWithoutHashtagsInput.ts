import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentCreateNestedManyWithoutPostInput } from "../inputs/AttachmentCreateNestedManyWithoutPostInput";
import { PostCommentCreateNestedManyWithoutPostInput } from "../inputs/PostCommentCreateNestedManyWithoutPostInput";
import { PostGroupCreateNestedManyWithoutPostsInput } from "../inputs/PostGroupCreateNestedManyWithoutPostsInput";
import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateWithoutHashtagsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  postedtime!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isAnnouncement!: boolean;

  @TypeGraphQL.Field(_type => PostGroupCreateNestedManyWithoutPostsInput, {
    nullable: true
  })
  postGroups?: PostGroupCreateNestedManyWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostsInput, {
    nullable: false
  })
  creator!: UserCreateNestedOneWithoutPostsInput;

  @TypeGraphQL.Field(_type => PostCommentCreateNestedManyWithoutPostInput, {
    nullable: true
  })
  comments?: PostCommentCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => AttachmentCreateNestedManyWithoutPostInput, {
    nullable: true
  })
  attachments?: AttachmentCreateNestedManyWithoutPostInput | undefined;
}
