import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberCreateNestedManyWithoutRolesInput } from "../inputs/ProjectMemberCreateNestedManyWithoutRolesInput";
import { ProjectMemberPermissionsCreateNestedOneWithoutProjectRoleInput } from "../inputs/ProjectMemberPermissionsCreateNestedOneWithoutProjectRoleInput";
import { ProjectRoleCreatelinkedOpenEndedTasksInput } from "../inputs/ProjectRoleCreatelinkedOpenEndedTasksInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleCreateWithoutProjectInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => ProjectRoleCreatelinkedOpenEndedTasksInput, {
    nullable: true
  })
  linkedOpenEndedTasks?: ProjectRoleCreatelinkedOpenEndedTasksInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberCreateNestedManyWithoutRolesInput, {
    nullable: true
  })
  assignedMembers?: ProjectMemberCreateNestedManyWithoutRolesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsCreateNestedOneWithoutProjectRoleInput, {
    nullable: false
  })
  permissions!: ProjectMemberPermissionsCreateNestedOneWithoutProjectRoleInput;
}
