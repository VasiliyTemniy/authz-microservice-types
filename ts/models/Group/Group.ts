import type { UUID } from "../../utils";

/**
 * Group domain model\
 * A tree-like structure of users
 * 
 * Logically same as relation(s), but with tree-like structure
 *
 * @memberof authz-microservice
 */
export class Group {
  constructor(
    readonly id: UUID,
    readonly title: string,
    readonly parent: Group | null,
    readonly children: Group[],
    readonly description?: string,
    readonly createdAt?: Date,
    readonly updatedAt?: Date
  ) {}
}

/**
 * Group Simple domain model\
 * A tree-like structure of users
 * 
 * Logically same as relation(s), but with tree-like structure
 *
 * @memberof authz-microservice
 */
export class GroupS {
  constructor(
    readonly id: UUID,
    readonly parent: GroupS | null,
    readonly children: GroupS[],
  ) {}
}