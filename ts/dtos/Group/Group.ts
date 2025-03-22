import type { Group, GroupS } from "../../models";
import type { MapToDto } from "../../utils";

export type GroupDto = MapToDto<Group>;
export type GroupSDto = MapToDto<GroupS>;