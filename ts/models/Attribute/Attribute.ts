import type { UUID } from "../../utils";
import type { AttributeValueType } from "./enums";

/**
 * Attribute domain model
 *
 * @memberof authz-microservice
 */
export class Attribute {
  constructor(
    readonly id: UUID,
    readonly title: string,
    readonly description: string,
    /** Actual entity property name */
    readonly propname: string,
    readonly valueType: AttributeValueType,
    readonly createdAt?: Date,
    readonly updatedAt?: Date,
  ) {}
}