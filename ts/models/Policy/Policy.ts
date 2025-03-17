import type { UUID } from "../../utils";
import type { CompareOperator, PolicyScope, PolicyType } from "./enums";
import type { Role } from "../Role";
import type { Attribute } from "../Attribute";
import type { User } from "../User";
import type { Client } from "../Client";
import type { GroupS } from "../Group";
import type { Relation } from "../Relation";

/**
 * Policy domain model
 * 
 * @memberof authz-microservice
 */
export class Policy {
  constructor(
    readonly id: UUID,
    readonly title: string,
    readonly description: string,
    readonly scope: PolicyScope,
    readonly type: PolicyType,
    readonly data: PolicyData,
    readonly createdAt?: Date,
    readonly updatedAt?: Date,
  ) {}
}

/**
 * Policy data domain model base
 * 
 * @memberof authz-microservice
 */
export class PolicyDataBase {
  constructor(
    /** true: allow, false: deny */
    readonly direction: boolean,
  ) {}
}

/**
 * User List policy data domain model
 * 
 * @memberof authz-microservice
 */
export class PolicyDataUserList extends PolicyDataBase {
  constructor(
    /** true: allow, false: deny */
    readonly direction: boolean,
    readonly userIds: Array<User["id"]>,
  ) {
    super(direction);
  }
}

/**
 * Role List policy data domain model
 * 
 * @memberof authz-microservice
 */
export class PolicyDataRoleList extends PolicyDataBase {
  constructor(
    /** true: allow, false: deny */
    readonly direction: boolean,
    readonly roleIds: Array<Role["id"]>,
  ) {
    super(direction);
  }
}

/**
 * Time policy data domain model
 * 
 * @memberof authz-microservice
 */
export class PolicyDataTime extends PolicyDataBase {
  constructor(
    /** true: allow, false: deny */
    readonly direction: boolean,
    /** unix timestamp */
    readonly start: number,
    /** unix timestamp */
    readonly end: number,
  ) {
    super(direction);
  }
}

/**
 * Client List policy data domain model
 * 
 * @memberof authz-microservice
 */
export class PolicyDataClient extends PolicyDataBase {
  constructor(
    /** true: allow, false: deny */
    readonly direction: boolean,
    readonly clientIds: Array<Client["id"]>,
  ) {
    super(direction);
  }
}

/**
 * Group policy data domain model
 * 
 * @memberof authz-microservice
 */
export class PolicyDataGroup extends PolicyDataBase {
  constructor(
    /** true: allow, false: deny */
    readonly direction: boolean,
    readonly groups: Array<GroupS>,
    /** depth limit, -1 for no depth, 0 for unlimited */
    readonly depth: number
  ) {
    super(direction);
  }
}

/**
 * Attribute policy data domain model
 * 
 * @memberof authz-microservice
 */
export class PolicyDataAttribute extends PolicyDataBase {
  constructor(
    /** true: allow, false: deny */
    readonly direction: boolean,
    readonly attribute: Attribute["propname"],
    /** compared value */
    readonly value: string,
    /** value type - string, number, boolean */
    readonly valueType: Attribute["valueType"],
    /** for numbers - threshold, for strings - tolerance for 'includes' */
    readonly threshold: number,
    /** comparator */
    readonly operator: CompareOperator,
  ) {
    super(direction);
  }
}

/**
 * Relation policy data domain model
 * 
 * @memberof authz-microservice
 */
export class PolicyDataRelation extends PolicyDataBase {
  constructor(
    /** true: allow, false: deny */
    readonly direction: boolean,
    readonly relationIds: Array<Relation["id"]>,
  ) {
    super(direction);
  }
}

/**
 * Aggregated policy data domain model
 * 
 * @memberof authz-microservice
 */
export class PolicyDataAggregated extends PolicyDataBase {
  constructor(
    /** true: allow, false: deny */
    readonly direction: boolean,
    readonly policies: Policy[],
  ) {
    super(direction);
  }
}

export type PolicyData =
  PolicyDataUserList |
  PolicyDataRoleList |
  PolicyDataTime |
  PolicyDataClient |
  PolicyDataGroup |
  PolicyDataAttribute |
  PolicyDataRelation |
  PolicyDataAggregated;