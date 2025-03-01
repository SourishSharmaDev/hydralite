import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { PostGroupListRelationFilter } from "../inputs/PostGroupListRelationFilter";
import { ProjectMemberListRelationFilter } from "../inputs/ProjectMemberListRelationFilter";
import { ProjectRoleListRelationFilter } from "../inputs/ProjectRoleListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectWhereInput {
  @TypeGraphQL.Field(_type => [ProjectWhereInput], {
    nullable: true
  })
  AND?: ProjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereInput], {
    nullable: true
  })
  OR?: ProjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereInput], {
    nullable: true
  })
  NOT?: ProjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  logoUrl?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  bannerUrl?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  newJoineesRequireApproval?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  owner?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  ownerId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberListRelationFilter, {
    nullable: true
  })
  members?: ProjectMemberListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  likers?: UserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  followers?: UserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectRoleListRelationFilter, {
    nullable: true
  })
  roles?: ProjectRoleListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostGroupListRelationFilter, {
    nullable: true
  })
  postGroups?: PostGroupListRelationFilter | undefined;
}
