import type { Attribute } from "../Attribute";
import type { UUID } from "../../utils";
import type { Role } from "../Role";
import type { Relation } from "../Relation";
import type { Group, GroupS } from "../Group";

/**
 * User domain model
 * 
 * @memberof authz-microservice
 */
export class User {
  constructor(
    readonly id: UUID,
    readonly attributes: { [key: Attribute["propname"]]: Attribute["valueType"] },
    readonly roles: Array<Role>,
    readonly relations: Array<Relation>,
    readonly groups: Array<Group>,
    readonly createdAt?: Date,
    readonly updatedAt?: Date
  ) {}
}

/**
 * User Simple domain model
 * 
 * @memberof authz-microservice
 */
export class UserS {
  constructor(
    readonly id: UUID,
    readonly attributes: { [key: Attribute["propname"]]: Attribute["valueType"] },
    readonly roleIds: Array<Role["id"]>,
    readonly relationIds: Array<Relation["id"]>,
    readonly groupsIds: Array<GroupS["id"]>,
    readonly createdAt?: Date,
    readonly updatedAt?: Date
  ) {}
}