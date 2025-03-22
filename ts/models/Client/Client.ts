import type { UUID } from "../../utils";

/**
 * Client domain model\
 * Represents api client that calls authz-microservice
 *
 * @memberof authz-microservice
 */
export class Client {
  constructor(
    readonly id: UUID,
    readonly title: string,
    readonly secret: string,
    readonly description?: string,
    readonly createdAt?: Date,
    readonly updatedAt?: Date
  ) {}
}