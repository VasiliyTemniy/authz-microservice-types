import type { UUID } from "../../utils";

/**
 * Role domain model
 * 
 * @memberof authz-microservice
 */
export class Role {
  constructor(
    readonly id: UUID,
    readonly title: string,
    readonly description: string,
    readonly createdAt?: Date,
    readonly updatedAt?: Date,
  ) {}
}
