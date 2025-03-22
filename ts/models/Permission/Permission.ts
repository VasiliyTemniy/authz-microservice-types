import type { UUID } from "../../utils";
import type { Policy } from "../Policy";
import type { ResourceType } from "../Resource";
import type { PermissionAction, PermissionScope, PermissionStrategy } from "./enums";

/**
 * Permission domain model\
 * Connects policies with resources
 * 
 * @memberof authz-microservice
 */
export class Permission {
  constructor(
    readonly id: UUID,
    readonly title: string,
    readonly scope: PermissionScope,
    readonly action: PermissionAction,
    readonly strategy: PermissionStrategy,
    readonly resourceType: ResourceType,
    readonly policies: Policy[],
    readonly description?: string,
    readonly createdAt?: Date,
    readonly updatedAt?: Date,
  ) {}
}
