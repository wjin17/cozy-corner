type Path<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}` | `${K}.${Path<T[K]>}`
          : `${K}`
        : never;
    }[keyof T]
  : never;

type NestedValue<T, K extends string> = K extends `${infer Key}.${infer Rest}`
  ? Rest extends Path<T[Key & keyof T]>
    ? T[Key & keyof T][Rest & keyof T[Key & keyof T]]
    : never
  : T[K & keyof T];
