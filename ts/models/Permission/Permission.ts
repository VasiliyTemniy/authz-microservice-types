import type { UUID } from "../../utils";
import type { Resource } from "../Resource";

export class Permission {
  constructor(
    readonly id: UUID,
    readonly title: string,
    readonly description: string,
    readonly target: string,
    readonly action: string,
    readonly resources?: Resource[],
    readonly createdAt?: Date,
    readonly updatedAt?: Date,
  ) {}
}
