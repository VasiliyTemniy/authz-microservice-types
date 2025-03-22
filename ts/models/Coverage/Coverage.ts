import type { UUID } from "../../utils";

/**
 * Coverage domain model\
 * A tree-like structure of resources
 *
 * @memberof authz-microservice
 */
export class Coverage {
  constructor(
    readonly id: UUID,
    readonly title: string,
    readonly parent: Coverage | null,
    readonly children: Coverage[],
    readonly description?: string,
    readonly createdAt?: Date,
    readonly updatedAt?: Date
  ) {}
}

/**
 * Coverage Simple domain model\
 * A tree-like structure of resources
 *
 * @memberof authz-microservice
 */
export class CoverageS {
  constructor(
    readonly id: UUID,
    readonly parent: CoverageS | null,
    readonly children: CoverageS[],
  ) {}
}