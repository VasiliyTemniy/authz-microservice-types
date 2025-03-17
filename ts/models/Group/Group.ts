import type { UUID } from "../../utils";

/**
 * Group domain model
 *
 * @memberof authz-microservice
 */
export class Group {
  constructor(
    readonly id: UUID,
    readonly title: string,
    readonly description: string,
    readonly parent: Group | null,
    readonly children: Group[],
    readonly createdAt?: Date,
    readonly updatedAt?: Date
  ) {}
}

/**
 * Group Simple domain model
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