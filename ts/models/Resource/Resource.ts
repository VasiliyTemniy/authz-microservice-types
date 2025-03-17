import type { UUID } from "../../utils";

/**
 * Resource domain model
 * 
 * @memberof authz-microservice
 */
export class Resource {
  constructor(
    readonly id: UUID,
    readonly title: string,
    readonly description: string,
    readonly createdAt?: Date,
    readonly updatedAt?: Date,
  ) {}
}