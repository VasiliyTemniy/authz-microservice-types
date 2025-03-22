import type { UUID } from "../../utils";
import type { AttributeValueType } from "./enums";

/**
 * Attribute domain model\
 * Represents some entity property that is used for attribute-based access control
 *
 * @memberof authz-microservice
 */
export class Attribute {
  constructor(
    readonly id: UUID,
    readonly title: string,
    /** Actual entity property name */
    readonly propname: string,
    readonly valueType: AttributeValueType,
    readonly description?: string,
    readonly createdAt?: Date,
    readonly updatedAt?: Date,
  ) {}
}