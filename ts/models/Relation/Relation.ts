import type { UUID } from "../../utils";

/**
 * Relation domain model
 * 
 * @memberof authz-microservice
 */
export class Relation {
  constructor(
    readonly id: UUID,
    readonly title: string,
    readonly description: string,
    readonly createdAt?: Date,
    readonly updatedAt?: Date,
  ) {}
}
