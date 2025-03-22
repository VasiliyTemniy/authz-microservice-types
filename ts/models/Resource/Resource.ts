import type { UUID } from "../../utils";

/**
 * Resource domain model\
 * An app entity whatever it is
 * 
 * @memberof authz-microservice
 */
export class Resource {
  constructor(
    readonly id: UUID,
    readonly type: ResourceType,
    readonly title?: string,
    readonly description?: string,
    readonly createdAt?: Date,
    readonly updatedAt?: Date,
  ) {}
}

/**
 * Resource type domain model\
 * An app entity type
 * 
 * @memberof authz-microservice
 */
export class ResourceType {
  constructor(
    readonly id: UUID,
    readonly title: string,
    readonly description?: string,
    readonly createdAt?: Date,
    readonly updatedAt?: Date,
  ) {}
}