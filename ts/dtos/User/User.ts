import type { User, UserS } from "../../models";
import type { MapToDto } from "../../utils";

export type UserDto = MapToDto<User>;
export type UserSDto = MapToDto<UserS>;