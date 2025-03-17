export enum PolicyScope {
  Global = 0,
  ByIssuer = 1,
  ByResourceType = 2,
  ByCoverage = 3,
  ByResourceId = 4,
}

export enum PolicyType {
  UserList = 0,
  RoleList = 1,
  Time = 2,
  Client = 3,
  Group = 4,
  Attribute = 5,
  Relation = 6,
  Aggregated = 7,
}

export enum CompareOperator {
  Eq = 0,
  Neq = 1,
  Gt = 2,
  Gte = 3,
  Lt = 4,
  Lte = 5,
  In = 6,
  NotIn = 7,
}
