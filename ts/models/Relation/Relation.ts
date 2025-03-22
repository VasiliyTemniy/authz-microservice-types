import type { UUID } from "../../utils";

/**
 * Relation domain model\
 * Represents some entity that is related to user and resources
 * 
 * Logically same as groups, without tree-like structure
 * 
 * @memberof authz-microservice
 */
export class Relation {
  constructor(
    readonly id: UUID,
    readonly title: string,
    readonly description?: string,
    readonly createdAt?: Date,
    readonly updatedAt?: Date,
  ) {}
}
