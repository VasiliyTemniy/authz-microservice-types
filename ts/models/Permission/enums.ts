export enum PermissionScope {
  Global = 0,
  ByIssuer = 1,
  ByResourceType = 2,
  ByCoverage = 3,
  ByResourceId = 4,
  /**
   * Own resources
   * For example, permission to update or delete some resource if some user is the resource owner
   */
  Own = 5,
}

export enum PermissionAction {
  All = 0,
  /** Read */
  R = 1,
  /** Write */
  W = 2,
  /** Update */
  U = 3,
  /** Delete */
  D = 4,
  /** Read/Write */
  RW = 5,
  /** Read/Update */
  RU = 6,
  /** Read/Delete */
  RD = 7,
  /** Read/Write/Update */
  RWD = 8,
  /** Read/Write/Update */
  RWU = 9,
}

export enum PermissionStrategy {
  /** All policies */
  Unanimous = 0,
  /** At least one policy */
  Affirmative = 1,
  /** Majority of policies */
  Consensus = 2,
}
