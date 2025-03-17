export type PropertiesTimestamps = 'createdAt' | 'updatedAt' | 'deletedAt';

export type MapToUnknown<T> = {
  [K in keyof T]: unknown
};

export type Expand<T> = T extends unknown ? { [K in keyof T]: T[K] } : never;

/** Maps a type to a type with all dates converted to strings */
export type MapToDto<T> = T extends Array<infer U> 
  ? Array<MapToDto<U>> 
  : {
    -readonly [K in keyof T]:
      T[K] extends Date ? string :
      T[K] extends Date | undefined ? string | undefined :
      T[K] extends Date | null ? string | null :
      T[K] extends Date | undefined | null ? string | undefined | null :
      T[K] extends object ? Expand<MapToDto<T[K]>> :
      T[K];
  };

/** Maps a type to a type without id and timestamps - new object */
export type MapToDtoN<T> = Expand<Omit<MapToDto<T>, 'id' | PropertiesTimestamps>>;

export type MapToStrings<T> = {
  [K in keyof T]: string
};