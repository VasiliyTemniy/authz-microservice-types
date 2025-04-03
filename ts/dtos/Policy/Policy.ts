import type { MapToDto } from "../../utils";
import type { Policy, PolicyDataAggregated, PolicyDataAttribute, PolicyDataRelation, PolicyDataRoleList, PolicyDataTime, PolicyDataUserList, PolicyDataClientList, PolicyDataGroupList } from "../../models";

export type PolicyDto = MapToDto<Policy & { data: PolicyDataDto }>;

export type PolicyDataUserListDto = MapToDto<PolicyDataUserList>;
export type PolicyDataRoleListDto = MapToDto<PolicyDataRoleList>;
export type PolicyDataTimeDto = MapToDto<PolicyDataTime>;
export type PolicyDataClientListDto = MapToDto<PolicyDataClientList>;
export type PolicyDataGroupListDto = MapToDto<PolicyDataGroupList>;
export type PolicyDataAttributeDto = MapToDto<PolicyDataAttribute>;
export type PolicyDataRelationDto = MapToDto<PolicyDataRelation>;
export type PolicyDataAggregatedDto = MapToDto<PolicyDataAggregated>;

export type PolicyDataDto =
  PolicyDataUserListDto |
  PolicyDataRoleListDto |
  PolicyDataTimeDto |
  PolicyDataClientListDto |
  PolicyDataGroupListDto |
  PolicyDataAttributeDto |
  PolicyDataRelationDto |
  PolicyDataAggregatedDto;