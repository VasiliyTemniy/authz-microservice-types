import type { Coverage, CoverageS } from "../../models";
import type { MapToDto } from "../../utils";

export type CoverageDto = MapToDto<Coverage>;
export type CoverageSDto = MapToDto<CoverageS>;