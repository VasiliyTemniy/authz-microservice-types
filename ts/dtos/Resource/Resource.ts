import type { Resource, ResourceType } from "../../models";
import type { MapToDto } from "../../utils";

export type ResourceDto = MapToDto<Resource>;
export type ResourceTypeDto = MapToDto<ResourceType>;