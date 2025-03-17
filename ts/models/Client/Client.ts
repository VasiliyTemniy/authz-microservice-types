import type { UUID } from "../../utils";

/**
 * Client domain model
 *
 * @memberof authz-microservice
 */
export class Client {
  constructor(
    readonly id: UUID,
    readonly title: string,
    readonly description: string,
    // Some api key handling must be implemented (?)
    readonly createdAt?: Date,
    readonly updatedAt?: Date
  ) {}
}