
/**
 * Client
**/

import * as runtime from './runtime';


/**
 * Model User
 */

export type User = {
  id: number
  name: string | null
  email: string | null
  institution: string | null
  language: string | null
  verified: boolean | null
  verifyId: string | null
  resetId: string | null
  isAdmin: boolean | null
  password: string | null
  termsAccepted: boolean | null
  privacyAccepted: boolean | null
}

/**
 * Model Slide
 */

export type Slide = {
  id: number
  title: string | null
  description: string | null
  order: number | null
  size: string | null
  longitude: number | null
  latitude: number | null
  zoom: number | null
  bearing: number | null
  pitch: number | null
  selectedFeature: string | null
  media: string | null
  imageTitle: string | null
  source: string | null
  url: string | null
  indicatorId: number | null
  geographyId: number | null
  projectId: number | null
}

/**
 * Model Image
 */

export type Image = {
  id: number
  title: string | null
  creator: string | null
  source: string | null
  date: string | null
  url: string | null
  slideId: number | null
}

/**
 * Model Project
 */

export type Project = {
  id: number
  title: string | null
  description: string | null
  category: string | null
  imageTitle: string | null
  source: string | null
  url: string | null
  published: boolean | null
  gallery: boolean | null
  updatedAt_utc: Date | null
  updatedAt_offset: string | null
  createdAt_utc: Date | null
  createdAt_offset: string | null
  userId: number | null
}

/**
 * Model Tag
 */

export type Tag = {
  id: number
  name: string | null
}

/**
 * Model Geography
 */

export type Geography = {
  id: number
  layer: string | null
  title: string | null
  ordering: number | null
}

/**
 * Model Indicator
 */

export type Indicator = {
  id: number
  varname: string | null
  title: string | null
  domain: string | null
  year: number | null
  source: string | null
  url: string | null
}

/**
 * Model Annotation
 */

export type Annotation = {
  id: number
  feature: string | null
  slideId: number | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): Promise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): Promise<T>;

  /**
   * Execute queries in a transaction
   * @example
   * ```
   * const [george, bob, alice] = await prisma.transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   */
  $transaction: PromiseConstructor['all']

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.slide`: Exposes CRUD operations for the **Slide** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Slides
    * const slides = await prisma.slide.findMany()
    * ```
    */
  get slide(): Prisma.SlideDelegate<GlobalReject>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<GlobalReject>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<GlobalReject>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<GlobalReject>;

  /**
   * `prisma.geography`: Exposes CRUD operations for the **Geography** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Geographies
    * const geographies = await prisma.geography.findMany()
    * ```
    */
  get geography(): Prisma.GeographyDelegate<GlobalReject>;

  /**
   * `prisma.indicator`: Exposes CRUD operations for the **Indicator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Indicators
    * const indicators = await prisma.indicator.findMany()
    * ```
    */
  get indicator(): Prisma.IndicatorDelegate<GlobalReject>;

  /**
   * `prisma.annotation`: Exposes CRUD operations for the **Annotation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Annotations
    * const annotations = await prisma.annotation.findMany()
    * ```
    */
  get annotation(): Prisma.AnnotationDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 2.16.1
   * Query Engine version: 8b74ad57aaf2cc6c155f382a18a8e3ba95aceb03
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  export type Union = any

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  /**
   * Allows creating `select` or `include` outside of the main statement
   * From https://github.com/prisma/prisma/issues/3372#issuecomment-762296484
   */

  type Cast<A1, A2> = A1 extends A2 ? A1 : A2;

  /**
   * `Exact` forces a type to comply by another type. It will need to be a subset
   * and must have exactly the same properties, no more, no less.
   */
  type Exact<A, W> = A & Cast<{
    [K in keyof A]: K extends keyof W ? A[K] : never
  }, W>;

  type Narrow<A, W = unknown> =
      A & {[K in keyof A]: NarrowAt<A, W, K>};

  type NarrowAt<A, W, K extends keyof A, AK = A[K], WK = Att<W, K>> =
      WK extends Widen<infer T> ? T :
      AK extends Narrowable ? AK & WK :
      Narrow<AK, WK>;

  type Att<O, K> = K extends keyof O ? O[K] : unknown;

  type Widen<A> = {[type]: A};

  type Narrowable =
  | string
  | number
  | bigint
  | boolean
  | [];

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<Narrow<S, V>, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, 'avg' | 'sum' | 'count' | 'min' | 'max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Slide: 'Slide',
    Image: 'Image',
    Project: 'Project',
    Tag: 'Tag',
    Geography: 'Geography',
    Indicator: 'Indicator',
    Annotation: 'Annotation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    postgresql?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }


  /**
   * Model User
   */


  export type AggregateUser = {
    count: UserCountAggregateOutputType | null
    avg: UserAvgAggregateOutputType | null
    sum: UserSumAggregateOutputType | null
    min: UserMinAggregateOutputType | null
    max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number
  }

  export type UserSumAggregateOutputType = {
    id: number
  }

  export type UserMinAggregateOutputType = {
    id: number
    name: string | null
    email: string | null
    institution: string | null
    language: string | null
    verified: boolean | null
    verifyId: string | null
    resetId: string | null
    isAdmin: boolean | null
    password: string | null
    termsAccepted: boolean | null
    privacyAccepted: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number
    name: string | null
    email: string | null
    institution: string | null
    language: string | null
    verified: boolean | null
    verifyId: string | null
    resetId: string | null
    isAdmin: boolean | null
    password: string | null
    termsAccepted: boolean | null
    privacyAccepted: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number | null
    email: number | null
    institution: number | null
    language: number | null
    verified: number | null
    verifyId: number | null
    resetId: number | null
    isAdmin: number | null
    password: number | null
    termsAccepted: number | null
    privacyAccepted: number | null
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    institution?: true
    language?: true
    verified?: true
    verifyId?: true
    resetId?: true
    isAdmin?: true
    password?: true
    termsAccepted?: true
    privacyAccepted?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    institution?: true
    language?: true
    verified?: true
    verifyId?: true
    resetId?: true
    isAdmin?: true
    password?: true
    termsAccepted?: true
    privacyAccepted?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    institution?: true
    language?: true
    verified?: true
    verifyId?: true
    resetId?: true
    isAdmin?: true
    password?: true
    termsAccepted?: true
    privacyAccepted?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
    **/
    where?: UserWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Users to fetch.
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }



  export type UserSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    institution?: boolean
    language?: boolean
    verified?: boolean
    verifyId?: boolean
    resetId?: boolean
    isAdmin?: boolean
    password?: boolean
    termsAccepted?: boolean
    privacyAccepted?: boolean
    projects?: boolean | ProjectFindManyArgs
  }

  export type UserInclude = {
    projects?: boolean | ProjectFindManyArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'projects'
        ? Array < ProjectGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'projects'
        ? Array < ProjectGetPayload<S['select'][P]>>  : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, Promise<Array<User>>, Promise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Promise<BatchPayload>

    /**
     * Update zero or more Users.
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Promise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Promise<
      T extends Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Promise<GetUserAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    projects<T extends ProjectFindManyArgs = {}>(args?: Subset<T, ProjectFindManyArgs>): CheckSelect<T, Promise<Array<Project>>, Promise<Array<ProjectGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
    **/
    where?: UserWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Users to fetch.
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
    **/
    skip?: number
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs
     * 
     * Filter by unique combinations of Users.
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
    **/
    where?: UserWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Users to fetch.
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
    **/
    data: XOR<UserUncheckedCreateInput, UserCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
    **/
    data: XOR<UserUncheckedUpdateInput, UserUpdateInput>
    /**
     * Choose, which User to update.
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUncheckedUpdateManyInput, UserUpdateManyMutationInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
    **/
    create: XOR<UserUncheckedCreateInput, UserCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<UserUncheckedUpdateInput, UserUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
  }



  /**
   * Model Slide
   */


  export type AggregateSlide = {
    count: SlideCountAggregateOutputType | null
    avg: SlideAvgAggregateOutputType | null
    sum: SlideSumAggregateOutputType | null
    min: SlideMinAggregateOutputType | null
    max: SlideMaxAggregateOutputType | null
  }

  export type SlideAvgAggregateOutputType = {
    id: number
    order: number | null
    longitude: number | null
    latitude: number | null
    zoom: number | null
    bearing: number | null
    pitch: number | null
    indicatorId: number | null
    geographyId: number | null
    projectId: number | null
  }

  export type SlideSumAggregateOutputType = {
    id: number
    order: number | null
    longitude: number | null
    latitude: number | null
    zoom: number | null
    bearing: number | null
    pitch: number | null
    indicatorId: number | null
    geographyId: number | null
    projectId: number | null
  }

  export type SlideMinAggregateOutputType = {
    id: number
    title: string | null
    description: string | null
    order: number | null
    size: string | null
    longitude: number | null
    latitude: number | null
    zoom: number | null
    bearing: number | null
    pitch: number | null
    selectedFeature: string | null
    media: string | null
    imageTitle: string | null
    source: string | null
    url: string | null
    indicatorId: number | null
    geographyId: number | null
    projectId: number | null
  }

  export type SlideMaxAggregateOutputType = {
    id: number
    title: string | null
    description: string | null
    order: number | null
    size: string | null
    longitude: number | null
    latitude: number | null
    zoom: number | null
    bearing: number | null
    pitch: number | null
    selectedFeature: string | null
    media: string | null
    imageTitle: string | null
    source: string | null
    url: string | null
    indicatorId: number | null
    geographyId: number | null
    projectId: number | null
  }

  export type SlideCountAggregateOutputType = {
    id: number
    title: number | null
    description: number | null
    order: number | null
    size: number | null
    longitude: number | null
    latitude: number | null
    zoom: number | null
    bearing: number | null
    pitch: number | null
    selectedFeature: number | null
    media: number | null
    imageTitle: number | null
    source: number | null
    url: number | null
    indicatorId: number | null
    geographyId: number | null
    projectId: number | null
    _all: number
  }


  export type SlideAvgAggregateInputType = {
    id?: true
    order?: true
    longitude?: true
    latitude?: true
    zoom?: true
    bearing?: true
    pitch?: true
    indicatorId?: true
    geographyId?: true
    projectId?: true
  }

  export type SlideSumAggregateInputType = {
    id?: true
    order?: true
    longitude?: true
    latitude?: true
    zoom?: true
    bearing?: true
    pitch?: true
    indicatorId?: true
    geographyId?: true
    projectId?: true
  }

  export type SlideMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    order?: true
    size?: true
    longitude?: true
    latitude?: true
    zoom?: true
    bearing?: true
    pitch?: true
    selectedFeature?: true
    media?: true
    imageTitle?: true
    source?: true
    url?: true
    indicatorId?: true
    geographyId?: true
    projectId?: true
  }

  export type SlideMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    order?: true
    size?: true
    longitude?: true
    latitude?: true
    zoom?: true
    bearing?: true
    pitch?: true
    selectedFeature?: true
    media?: true
    imageTitle?: true
    source?: true
    url?: true
    indicatorId?: true
    geographyId?: true
    projectId?: true
  }

  export type SlideCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    order?: true
    size?: true
    longitude?: true
    latitude?: true
    zoom?: true
    bearing?: true
    pitch?: true
    selectedFeature?: true
    media?: true
    imageTitle?: true
    source?: true
    url?: true
    indicatorId?: true
    geographyId?: true
    projectId?: true
    _all?: true
  }

  export type SlideAggregateArgs = {
    /**
     * Filter which Slide to aggregate.
    **/
    where?: SlideWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Slides to fetch.
    **/
    orderBy?: Enumerable<SlideOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: SlideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slides from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slides.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Slides
    **/
    count?: true | SlideCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: SlideAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: SlideSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: SlideMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: SlideMaxAggregateInputType
  }

  export type GetSlideAggregateType<T extends SlideAggregateArgs> = {
    [P in keyof T & keyof AggregateSlide]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlide[P]>
      : GetScalarType<T[P], AggregateSlide[P]>
  }



  export type SlideSelect = {
    id?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    size?: boolean
    longitude?: boolean
    latitude?: boolean
    zoom?: boolean
    bearing?: boolean
    pitch?: boolean
    selectedFeature?: boolean
    media?: boolean
    imageTitle?: boolean
    source?: boolean
    url?: boolean
    indicator?: boolean | IndicatorArgs
    indicatorId?: boolean
    geography?: boolean | GeographyArgs
    geographyId?: boolean
    image?: boolean | ImageArgs
    project?: boolean | ProjectArgs
    projectId?: boolean
    annotations?: boolean | AnnotationFindManyArgs
  }

  export type SlideInclude = {
    indicator?: boolean | IndicatorArgs
    geography?: boolean | GeographyArgs
    image?: boolean | ImageArgs
    project?: boolean | ProjectArgs
    annotations?: boolean | AnnotationFindManyArgs
  }

  export type SlideGetPayload<
    S extends boolean | null | undefined | SlideArgs,
    U = keyof S
      > = S extends true
        ? Slide
    : S extends undefined
    ? never
    : S extends SlideArgs | SlideFindManyArgs
    ?'include' extends U
    ? Slide  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'indicator'
        ? IndicatorGetPayload<S['include'][P]> | null :
        P extends 'geography'
        ? GeographyGetPayload<S['include'][P]> | null :
        P extends 'image'
        ? ImageGetPayload<S['include'][P]> | null :
        P extends 'project'
        ? ProjectGetPayload<S['include'][P]> | null :
        P extends 'annotations'
        ? Array < AnnotationGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Slide ?Slide [P]
  : 
          P extends 'indicator'
        ? IndicatorGetPayload<S['select'][P]> | null :
        P extends 'geography'
        ? GeographyGetPayload<S['select'][P]> | null :
        P extends 'image'
        ? ImageGetPayload<S['select'][P]> | null :
        P extends 'project'
        ? ProjectGetPayload<S['select'][P]> | null :
        P extends 'annotations'
        ? Array < AnnotationGetPayload<S['select'][P]>>  : never
  } 
    : Slide
  : Slide


  type SlideCountArgs = Merge<
    Omit<SlideFindManyArgs, 'select' | 'include'> & {
      select?: SlideCountAggregateInputType | true
    }
  >

  export interface SlideDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Slide that matches the filter.
     * @param {SlideFindUniqueArgs} args - Arguments to find a Slide
     * @example
     * // Get one Slide
     * const slide = await prisma.slide.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SlideFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SlideFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Slide'> extends True ? CheckSelect<T, Prisma__SlideClient<Slide>, Prisma__SlideClient<SlideGetPayload<T>>> : CheckSelect<T, Prisma__SlideClient<Slide | null >, Prisma__SlideClient<SlideGetPayload<T> | null >>

    /**
     * Find the first Slide that matches the filter.
     * @param {SlideFindFirstArgs} args - Arguments to find a Slide
     * @example
     * // Get one Slide
     * const slide = await prisma.slide.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SlideFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SlideFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Slide'> extends True ? CheckSelect<T, Prisma__SlideClient<Slide>, Prisma__SlideClient<SlideGetPayload<T>>> : CheckSelect<T, Prisma__SlideClient<Slide | null >, Prisma__SlideClient<SlideGetPayload<T> | null >>

    /**
     * Find zero or more Slides that matches the filter.
     * @param {SlideFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Slides
     * const slides = await prisma.slide.findMany()
     * 
     * // Get first 10 Slides
     * const slides = await prisma.slide.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slideWithIdOnly = await prisma.slide.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SlideFindManyArgs>(
      args?: SelectSubset<T, SlideFindManyArgs>
    ): CheckSelect<T, Promise<Array<Slide>>, Promise<Array<SlideGetPayload<T>>>>

    /**
     * Create a Slide.
     * @param {SlideCreateArgs} args - Arguments to create a Slide.
     * @example
     * // Create one Slide
     * const Slide = await prisma.slide.create({
     *   data: {
     *     // ... data to create a Slide
     *   }
     * })
     * 
    **/
    create<T extends SlideCreateArgs>(
      args: SelectSubset<T, SlideCreateArgs>
    ): CheckSelect<T, Prisma__SlideClient<Slide>, Prisma__SlideClient<SlideGetPayload<T>>>

    /**
     * Delete a Slide.
     * @param {SlideDeleteArgs} args - Arguments to delete one Slide.
     * @example
     * // Delete one Slide
     * const Slide = await prisma.slide.delete({
     *   where: {
     *     // ... filter to delete one Slide
     *   }
     * })
     * 
    **/
    delete<T extends SlideDeleteArgs>(
      args: SelectSubset<T, SlideDeleteArgs>
    ): CheckSelect<T, Prisma__SlideClient<Slide>, Prisma__SlideClient<SlideGetPayload<T>>>

    /**
     * Update one Slide.
     * @param {SlideUpdateArgs} args - Arguments to update one Slide.
     * @example
     * // Update one Slide
     * const slide = await prisma.slide.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SlideUpdateArgs>(
      args: SelectSubset<T, SlideUpdateArgs>
    ): CheckSelect<T, Prisma__SlideClient<Slide>, Prisma__SlideClient<SlideGetPayload<T>>>

    /**
     * Delete zero or more Slides.
     * @param {SlideDeleteManyArgs} args - Arguments to filter Slides to delete.
     * @example
     * // Delete a few Slides
     * const { count } = await prisma.slide.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SlideDeleteManyArgs>(
      args?: SelectSubset<T, SlideDeleteManyArgs>
    ): Promise<BatchPayload>

    /**
     * Update zero or more Slides.
     * @param {SlideUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Slides
     * const slide = await prisma.slide.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SlideUpdateManyArgs>(
      args: SelectSubset<T, SlideUpdateManyArgs>
    ): Promise<BatchPayload>

    /**
     * Create or update one Slide.
     * @param {SlideUpsertArgs} args - Arguments to update or create a Slide.
     * @example
     * // Update or create a Slide
     * const slide = await prisma.slide.upsert({
     *   create: {
     *     // ... data to create a Slide
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Slide we want to update
     *   }
     * })
    **/
    upsert<T extends SlideUpsertArgs>(
      args: SelectSubset<T, SlideUpsertArgs>
    ): CheckSelect<T, Prisma__SlideClient<Slide>, Prisma__SlideClient<SlideGetPayload<T>>>

    /**
     * Count the number of Slides.
     * @param {SlideCountArgs} args - Arguments to filter Slides to count.
     * @example
     * // Count the number of Slides
     * const count = await prisma.slide.count({
     *   where: {
     *     // ... the filter for the Slides we want to count
     *   }
     * })
    **/
    count<T extends SlideCountArgs>(
      args?: Subset<T, SlideCountArgs>,
    ): Promise<
      T extends Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlideCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Slide.
     * @param {SlideAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SlideAggregateArgs>(args: Subset<T, SlideAggregateArgs>): Promise<GetSlideAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Slide.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SlideClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    indicator<T extends IndicatorArgs = {}>(args?: Subset<T, IndicatorArgs>): CheckSelect<T, Prisma__IndicatorClient<Indicator | null >, Prisma__IndicatorClient<IndicatorGetPayload<T> | null >>;

    geography<T extends GeographyArgs = {}>(args?: Subset<T, GeographyArgs>): CheckSelect<T, Prisma__GeographyClient<Geography | null >, Prisma__GeographyClient<GeographyGetPayload<T> | null >>;

    image<T extends ImageArgs = {}>(args?: Subset<T, ImageArgs>): CheckSelect<T, Prisma__ImageClient<Image | null >, Prisma__ImageClient<ImageGetPayload<T> | null >>;

    project<T extends ProjectArgs = {}>(args?: Subset<T, ProjectArgs>): CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>;

    annotations<T extends AnnotationFindManyArgs = {}>(args?: Subset<T, AnnotationFindManyArgs>): CheckSelect<T, Promise<Array<Annotation>>, Promise<Array<AnnotationGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Slide findUnique
   */
  export type SlideFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Slide
    **/
    select?: SlideSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: SlideInclude | null
    /**
     * Throw an Error if a Slide can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Slide to fetch.
    **/
    where: SlideWhereUniqueInput
  }


  /**
   * Slide findFirst
   */
  export type SlideFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Slide
    **/
    select?: SlideSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: SlideInclude | null
    /**
     * Throw an Error if a Slide can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Slide to fetch.
    **/
    where?: SlideWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Slides to fetch.
    **/
    orderBy?: Enumerable<SlideOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Slides.
    **/
    cursor?: SlideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slides from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slides.
    **/
    skip?: number
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs
     * 
     * Filter by unique combinations of Slides.
    **/
    distinct?: Enumerable<SlideScalarFieldEnum>
  }


  /**
   * Slide findMany
   */
  export type SlideFindManyArgs = {
    /**
     * Select specific fields to fetch from the Slide
    **/
    select?: SlideSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: SlideInclude | null
    /**
     * Filter, which Slides to fetch.
    **/
    where?: SlideWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Slides to fetch.
    **/
    orderBy?: Enumerable<SlideOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Slides.
    **/
    cursor?: SlideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slides from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slides.
    **/
    skip?: number
    distinct?: Enumerable<SlideScalarFieldEnum>
  }


  /**
   * Slide create
   */
  export type SlideCreateArgs = {
    /**
     * Select specific fields to fetch from the Slide
    **/
    select?: SlideSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: SlideInclude | null
    /**
     * The data needed to create a Slide.
    **/
    data: XOR<SlideUncheckedCreateInput, SlideCreateInput>
  }


  /**
   * Slide update
   */
  export type SlideUpdateArgs = {
    /**
     * Select specific fields to fetch from the Slide
    **/
    select?: SlideSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: SlideInclude | null
    /**
     * The data needed to update a Slide.
    **/
    data: XOR<SlideUncheckedUpdateInput, SlideUpdateInput>
    /**
     * Choose, which Slide to update.
    **/
    where: SlideWhereUniqueInput
  }


  /**
   * Slide updateMany
   */
  export type SlideUpdateManyArgs = {
    data: XOR<SlideUncheckedUpdateManyInput, SlideUpdateManyMutationInput>
    where?: SlideWhereInput
  }


  /**
   * Slide upsert
   */
  export type SlideUpsertArgs = {
    /**
     * Select specific fields to fetch from the Slide
    **/
    select?: SlideSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: SlideInclude | null
    /**
     * The filter to search for the Slide to update in case it exists.
    **/
    where: SlideWhereUniqueInput
    /**
     * In case the Slide found by the `where` argument doesn't exist, create a new Slide with this data.
    **/
    create: XOR<SlideUncheckedCreateInput, SlideCreateInput>
    /**
     * In case the Slide was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<SlideUncheckedUpdateInput, SlideUpdateInput>
  }


  /**
   * Slide delete
   */
  export type SlideDeleteArgs = {
    /**
     * Select specific fields to fetch from the Slide
    **/
    select?: SlideSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: SlideInclude | null
    /**
     * Filter which Slide to delete.
    **/
    where: SlideWhereUniqueInput
  }


  /**
   * Slide deleteMany
   */
  export type SlideDeleteManyArgs = {
    where?: SlideWhereInput
  }


  /**
   * Slide without action
   */
  export type SlideArgs = {
    /**
     * Select specific fields to fetch from the Slide
    **/
    select?: SlideSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: SlideInclude | null
  }



  /**
   * Model Image
   */


  export type AggregateImage = {
    count: ImageCountAggregateOutputType | null
    avg: ImageAvgAggregateOutputType | null
    sum: ImageSumAggregateOutputType | null
    min: ImageMinAggregateOutputType | null
    max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number
    slideId: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number
    slideId: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number
    title: string | null
    creator: string | null
    source: string | null
    date: string | null
    url: string | null
    slideId: number | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number
    title: string | null
    creator: string | null
    source: string | null
    date: string | null
    url: string | null
    slideId: number | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    title: number | null
    creator: number | null
    source: number | null
    date: number | null
    url: number | null
    slideId: number | null
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
    slideId?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
    slideId?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    title?: true
    creator?: true
    source?: true
    date?: true
    url?: true
    slideId?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    title?: true
    creator?: true
    source?: true
    date?: true
    url?: true
    slideId?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    title?: true
    creator?: true
    source?: true
    date?: true
    url?: true
    slideId?: true
    _all?: true
  }

  export type ImageAggregateArgs = {
    /**
     * Filter which Image to aggregate.
    **/
    where?: ImageWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Images to fetch.
    **/
    orderBy?: Enumerable<ImageOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
    [P in keyof T & keyof AggregateImage]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }



  export type ImageSelect = {
    id?: boolean
    title?: boolean
    creator?: boolean
    source?: boolean
    date?: boolean
    url?: boolean
    slide?: boolean | SlideArgs
    slideId?: boolean
  }

  export type ImageInclude = {
    slide?: boolean | SlideArgs
  }

  export type ImageGetPayload<
    S extends boolean | null | undefined | ImageArgs,
    U = keyof S
      > = S extends true
        ? Image
    : S extends undefined
    ? never
    : S extends ImageArgs | ImageFindManyArgs
    ?'include' extends U
    ? Image  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'slide'
        ? SlideGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Image ?Image [P]
  : 
          P extends 'slide'
        ? SlideGetPayload<S['select'][P]> | null : never
  } 
    : Image
  : Image


  type ImageCountArgs = Merge<
    Omit<ImageFindManyArgs, 'select' | 'include'> & {
      select?: ImageCountAggregateInputType | true
    }
  >

  export interface ImageDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Image'> extends True ? CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>> : CheckSelect<T, Prisma__ImageClient<Image | null >, Prisma__ImageClient<ImageGetPayload<T> | null >>

    /**
     * Find the first Image that matches the filter.
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Image'> extends True ? CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>> : CheckSelect<T, Prisma__ImageClient<Image | null >, Prisma__ImageClient<ImageGetPayload<T> | null >>

    /**
     * Find zero or more Images that matches the filter.
     * @param {ImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImageFindManyArgs>(
      args?: SelectSubset<T, ImageFindManyArgs>
    ): CheckSelect<T, Promise<Array<Image>>, Promise<Array<ImageGetPayload<T>>>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
    **/
    create<T extends ImageCreateArgs>(
      args: SelectSubset<T, ImageCreateArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
    **/
    delete<T extends ImageDeleteArgs>(
      args: SelectSubset<T, ImageDeleteArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImageUpdateArgs>(
      args: SelectSubset<T, ImageUpdateArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImageDeleteManyArgs>(
      args?: SelectSubset<T, ImageDeleteManyArgs>
    ): Promise<BatchPayload>

    /**
     * Update zero or more Images.
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImageUpdateManyArgs>(
      args: SelectSubset<T, ImageUpdateManyArgs>
    ): Promise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
    **/
    upsert<T extends ImageUpsertArgs>(
      args: SelectSubset<T, ImageUpsertArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Count the number of Images.
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Promise<
      T extends Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Promise<GetImageAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ImageClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    slide<T extends SlideArgs = {}>(args?: Subset<T, SlideArgs>): CheckSelect<T, Prisma__SlideClient<Slide | null >, Prisma__SlideClient<SlideGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Image
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ImageInclude | null
    /**
     * Throw an Error if a Image can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Image to fetch.
    **/
    where: ImageWhereUniqueInput
  }


  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Image
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ImageInclude | null
    /**
     * Throw an Error if a Image can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Image to fetch.
    **/
    where?: ImageWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Images to fetch.
    **/
    orderBy?: Enumerable<ImageOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
    **/
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
    **/
    skip?: number
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs
     * 
     * Filter by unique combinations of Images.
    **/
    distinct?: Enumerable<ImageScalarFieldEnum>
  }


  /**
   * Image findMany
   */
  export type ImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the Image
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ImageInclude | null
    /**
     * Filter, which Images to fetch.
    **/
    where?: ImageWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Images to fetch.
    **/
    orderBy?: Enumerable<ImageOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
    **/
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
    **/
    skip?: number
    distinct?: Enumerable<ImageScalarFieldEnum>
  }


  /**
   * Image create
   */
  export type ImageCreateArgs = {
    /**
     * Select specific fields to fetch from the Image
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ImageInclude | null
    /**
     * The data needed to create a Image.
    **/
    data: XOR<ImageUncheckedCreateInput, ImageCreateInput>
  }


  /**
   * Image update
   */
  export type ImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the Image
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ImageInclude | null
    /**
     * The data needed to update a Image.
    **/
    data: XOR<ImageUncheckedUpdateInput, ImageUpdateInput>
    /**
     * Choose, which Image to update.
    **/
    where: ImageWhereUniqueInput
  }


  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs = {
    data: XOR<ImageUncheckedUpdateManyInput, ImageUpdateManyMutationInput>
    where?: ImageWhereInput
  }


  /**
   * Image upsert
   */
  export type ImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the Image
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ImageInclude | null
    /**
     * The filter to search for the Image to update in case it exists.
    **/
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
    **/
    create: XOR<ImageUncheckedCreateInput, ImageCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<ImageUncheckedUpdateInput, ImageUpdateInput>
  }


  /**
   * Image delete
   */
  export type ImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the Image
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ImageInclude | null
    /**
     * Filter which Image to delete.
    **/
    where: ImageWhereUniqueInput
  }


  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs = {
    where?: ImageWhereInput
  }


  /**
   * Image without action
   */
  export type ImageArgs = {
    /**
     * Select specific fields to fetch from the Image
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ImageInclude | null
  }



  /**
   * Model Project
   */


  export type AggregateProject = {
    count: ProjectCountAggregateOutputType | null
    avg: ProjectAvgAggregateOutputType | null
    sum: ProjectSumAggregateOutputType | null
    min: ProjectMinAggregateOutputType | null
    max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number
    userId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number
    userId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number
    title: string | null
    description: string | null
    category: string | null
    imageTitle: string | null
    source: string | null
    url: string | null
    published: boolean | null
    gallery: boolean | null
    updatedAt_utc: Date | null
    updatedAt_offset: string | null
    createdAt_utc: Date | null
    createdAt_offset: string | null
    userId: number | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number
    title: string | null
    description: string | null
    category: string | null
    imageTitle: string | null
    source: string | null
    url: string | null
    published: boolean | null
    gallery: boolean | null
    updatedAt_utc: Date | null
    updatedAt_offset: string | null
    createdAt_utc: Date | null
    createdAt_offset: string | null
    userId: number | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number | null
    description: number | null
    category: number | null
    imageTitle: number | null
    source: number | null
    url: number | null
    published: number | null
    gallery: number | null
    updatedAt_utc: number | null
    updatedAt_offset: number | null
    createdAt_utc: number | null
    createdAt_offset: number | null
    userId: number | null
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    imageTitle?: true
    source?: true
    url?: true
    published?: true
    gallery?: true
    updatedAt_utc?: true
    updatedAt_offset?: true
    createdAt_utc?: true
    createdAt_offset?: true
    userId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    imageTitle?: true
    source?: true
    url?: true
    published?: true
    gallery?: true
    updatedAt_utc?: true
    updatedAt_offset?: true
    createdAt_utc?: true
    createdAt_offset?: true
    userId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    imageTitle?: true
    source?: true
    url?: true
    published?: true
    gallery?: true
    updatedAt_utc?: true
    updatedAt_offset?: true
    createdAt_utc?: true
    createdAt_offset?: true
    userId?: true
    _all?: true
  }

  export type ProjectAggregateArgs = {
    /**
     * Filter which Project to aggregate.
    **/
    where?: ProjectWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Projects to fetch.
    **/
    orderBy?: Enumerable<ProjectOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
    [P in keyof T & keyof AggregateProject]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }



  export type ProjectSelect = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    imageTitle?: boolean
    source?: boolean
    url?: boolean
    published?: boolean
    gallery?: boolean
    updatedAt_utc?: boolean
    updatedAt_offset?: boolean
    createdAt_utc?: boolean
    createdAt_offset?: boolean
    tags?: boolean | TagFindManyArgs
    slides?: boolean | SlideFindManyArgs
    user?: boolean | UserArgs
    userId?: boolean
  }

  export type ProjectInclude = {
    tags?: boolean | TagFindManyArgs
    slides?: boolean | SlideFindManyArgs
    user?: boolean | UserArgs
  }

  export type ProjectGetPayload<
    S extends boolean | null | undefined | ProjectArgs,
    U = keyof S
      > = S extends true
        ? Project
    : S extends undefined
    ? never
    : S extends ProjectArgs | ProjectFindManyArgs
    ?'include' extends U
    ? Project  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'tags'
        ? Array < TagGetPayload<S['include'][P]>>  :
        P extends 'slides'
        ? Array < SlideGetPayload<S['include'][P]>>  :
        P extends 'user'
        ? UserGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Project ?Project [P]
  : 
          P extends 'tags'
        ? Array < TagGetPayload<S['select'][P]>>  :
        P extends 'slides'
        ? Array < SlideGetPayload<S['select'][P]>>  :
        P extends 'user'
        ? UserGetPayload<S['select'][P]> | null : never
  } 
    : Project
  : Project


  type ProjectCountArgs = Merge<
    Omit<ProjectFindManyArgs, 'select' | 'include'> & {
      select?: ProjectCountAggregateInputType | true
    }
  >

  export interface ProjectDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProjectFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Project'> extends True ? CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>> : CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>

    /**
     * Find the first Project that matches the filter.
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProjectFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Project'> extends True ? CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>> : CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>

    /**
     * Find zero or more Projects that matches the filter.
     * @param {ProjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjectFindManyArgs>(
      args?: SelectSubset<T, ProjectFindManyArgs>
    ): CheckSelect<T, Promise<Array<Project>>, Promise<Array<ProjectGetPayload<T>>>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
    **/
    create<T extends ProjectCreateArgs>(
      args: SelectSubset<T, ProjectCreateArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
    **/
    delete<T extends ProjectDeleteArgs>(
      args: SelectSubset<T, ProjectDeleteArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectUpdateArgs>(
      args: SelectSubset<T, ProjectUpdateArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectDeleteManyArgs>(
      args?: SelectSubset<T, ProjectDeleteManyArgs>
    ): Promise<BatchPayload>

    /**
     * Update zero or more Projects.
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectUpdateManyArgs>(
      args: SelectSubset<T, ProjectUpdateManyArgs>
    ): Promise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectUpsertArgs>(
      args: SelectSubset<T, ProjectUpsertArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Count the number of Projects.
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Promise<
      T extends Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Promise<GetProjectAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProjectClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    tags<T extends TagFindManyArgs = {}>(args?: Subset<T, TagFindManyArgs>): CheckSelect<T, Promise<Array<Tag>>, Promise<Array<TagGetPayload<T>>>>;

    slides<T extends SlideFindManyArgs = {}>(args?: Subset<T, SlideFindManyArgs>): CheckSelect<T, Promise<Array<Slide>>, Promise<Array<SlideGetPayload<T>>>>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Project
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ProjectInclude | null
    /**
     * Throw an Error if a Project can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Project to fetch.
    **/
    where: ProjectWhereUniqueInput
  }


  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Project
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ProjectInclude | null
    /**
     * Throw an Error if a Project can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Project to fetch.
    **/
    where?: ProjectWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Projects to fetch.
    **/
    orderBy?: Enumerable<ProjectOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
    **/
    skip?: number
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs
     * 
     * Filter by unique combinations of Projects.
    **/
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }


  /**
   * Project findMany
   */
  export type ProjectFindManyArgs = {
    /**
     * Select specific fields to fetch from the Project
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ProjectInclude | null
    /**
     * Filter, which Projects to fetch.
    **/
    where?: ProjectWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Projects to fetch.
    **/
    orderBy?: Enumerable<ProjectOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
    **/
    skip?: number
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }


  /**
   * Project create
   */
  export type ProjectCreateArgs = {
    /**
     * Select specific fields to fetch from the Project
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ProjectInclude | null
    /**
     * The data needed to create a Project.
    **/
    data: XOR<ProjectUncheckedCreateInput, ProjectCreateInput>
  }


  /**
   * Project update
   */
  export type ProjectUpdateArgs = {
    /**
     * Select specific fields to fetch from the Project
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ProjectInclude | null
    /**
     * The data needed to update a Project.
    **/
    data: XOR<ProjectUncheckedUpdateInput, ProjectUpdateInput>
    /**
     * Choose, which Project to update.
    **/
    where: ProjectWhereUniqueInput
  }


  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs = {
    data: XOR<ProjectUncheckedUpdateManyInput, ProjectUpdateManyMutationInput>
    where?: ProjectWhereInput
  }


  /**
   * Project upsert
   */
  export type ProjectUpsertArgs = {
    /**
     * Select specific fields to fetch from the Project
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ProjectInclude | null
    /**
     * The filter to search for the Project to update in case it exists.
    **/
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
    **/
    create: XOR<ProjectUncheckedCreateInput, ProjectCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<ProjectUncheckedUpdateInput, ProjectUpdateInput>
  }


  /**
   * Project delete
   */
  export type ProjectDeleteArgs = {
    /**
     * Select specific fields to fetch from the Project
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ProjectInclude | null
    /**
     * Filter which Project to delete.
    **/
    where: ProjectWhereUniqueInput
  }


  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs = {
    where?: ProjectWhereInput
  }


  /**
   * Project without action
   */
  export type ProjectArgs = {
    /**
     * Select specific fields to fetch from the Project
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ProjectInclude | null
  }



  /**
   * Model Tag
   */


  export type AggregateTag = {
    count: TagCountAggregateOutputType | null
    avg: TagAvgAggregateOutputType | null
    sum: TagSumAggregateOutputType | null
    min: TagMinAggregateOutputType | null
    max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number
  }

  export type TagSumAggregateOutputType = {
    id: number
  }

  export type TagMinAggregateOutputType = {
    id: number
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: number
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number | null
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs = {
    /**
     * Filter which Tag to aggregate.
    **/
    where?: TagWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Tags to fetch.
    **/
    orderBy?: Enumerable<TagOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
    [P in keyof T & keyof AggregateTag]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }



  export type TagSelect = {
    id?: boolean
    name?: boolean
    from_Project_tags?: boolean | ProjectFindManyArgs
  }

  export type TagInclude = {
    from_Project_tags?: boolean | ProjectFindManyArgs
  }

  export type TagGetPayload<
    S extends boolean | null | undefined | TagArgs,
    U = keyof S
      > = S extends true
        ? Tag
    : S extends undefined
    ? never
    : S extends TagArgs | TagFindManyArgs
    ?'include' extends U
    ? Tag  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'from_Project_tags'
        ? Array < ProjectGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Tag ?Tag [P]
  : 
          P extends 'from_Project_tags'
        ? Array < ProjectGetPayload<S['select'][P]>>  : never
  } 
    : Tag
  : Tag


  type TagCountArgs = Merge<
    Omit<TagFindManyArgs, 'select' | 'include'> & {
      select?: TagCountAggregateInputType | true
    }
  >

  export interface TagDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TagFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TagFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tag'> extends True ? CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>> : CheckSelect<T, Prisma__TagClient<Tag | null >, Prisma__TagClient<TagGetPayload<T> | null >>

    /**
     * Find the first Tag that matches the filter.
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TagFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TagFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tag'> extends True ? CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>> : CheckSelect<T, Prisma__TagClient<Tag | null >, Prisma__TagClient<TagGetPayload<T> | null >>

    /**
     * Find zero or more Tags that matches the filter.
     * @param {TagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TagFindManyArgs>(
      args?: SelectSubset<T, TagFindManyArgs>
    ): CheckSelect<T, Promise<Array<Tag>>, Promise<Array<TagGetPayload<T>>>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
    **/
    create<T extends TagCreateArgs>(
      args: SelectSubset<T, TagCreateArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
    **/
    delete<T extends TagDeleteArgs>(
      args: SelectSubset<T, TagDeleteArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TagUpdateArgs>(
      args: SelectSubset<T, TagUpdateArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TagDeleteManyArgs>(
      args?: SelectSubset<T, TagDeleteManyArgs>
    ): Promise<BatchPayload>

    /**
     * Update zero or more Tags.
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TagUpdateManyArgs>(
      args: SelectSubset<T, TagUpdateManyArgs>
    ): Promise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
    **/
    upsert<T extends TagUpsertArgs>(
      args: SelectSubset<T, TagUpsertArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Count the number of Tags.
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Promise<
      T extends Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Promise<GetTagAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TagClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    from_Project_tags<T extends ProjectFindManyArgs = {}>(args?: Subset<T, ProjectFindManyArgs>): CheckSelect<T, Promise<Array<Project>>, Promise<Array<ProjectGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Tag
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TagInclude | null
    /**
     * Throw an Error if a Tag can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tag to fetch.
    **/
    where: TagWhereUniqueInput
  }


  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Tag
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TagInclude | null
    /**
     * Throw an Error if a Tag can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tag to fetch.
    **/
    where?: TagWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Tags to fetch.
    **/
    orderBy?: Enumerable<TagOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
    **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
    **/
    skip?: number
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs
     * 
     * Filter by unique combinations of Tags.
    **/
    distinct?: Enumerable<TagScalarFieldEnum>
  }


  /**
   * Tag findMany
   */
  export type TagFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tag
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TagInclude | null
    /**
     * Filter, which Tags to fetch.
    **/
    where?: TagWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Tags to fetch.
    **/
    orderBy?: Enumerable<TagOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
    **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
    **/
    skip?: number
    distinct?: Enumerable<TagScalarFieldEnum>
  }


  /**
   * Tag create
   */
  export type TagCreateArgs = {
    /**
     * Select specific fields to fetch from the Tag
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TagInclude | null
    /**
     * The data needed to create a Tag.
    **/
    data: XOR<TagUncheckedCreateInput, TagCreateInput>
  }


  /**
   * Tag update
   */
  export type TagUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tag
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TagInclude | null
    /**
     * The data needed to update a Tag.
    **/
    data: XOR<TagUncheckedUpdateInput, TagUpdateInput>
    /**
     * Choose, which Tag to update.
    **/
    where: TagWhereUniqueInput
  }


  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs = {
    data: XOR<TagUncheckedUpdateManyInput, TagUpdateManyMutationInput>
    where?: TagWhereInput
  }


  /**
   * Tag upsert
   */
  export type TagUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tag
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TagInclude | null
    /**
     * The filter to search for the Tag to update in case it exists.
    **/
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
    **/
    create: XOR<TagUncheckedCreateInput, TagCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<TagUncheckedUpdateInput, TagUpdateInput>
  }


  /**
   * Tag delete
   */
  export type TagDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tag
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TagInclude | null
    /**
     * Filter which Tag to delete.
    **/
    where: TagWhereUniqueInput
  }


  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs = {
    where?: TagWhereInput
  }


  /**
   * Tag without action
   */
  export type TagArgs = {
    /**
     * Select specific fields to fetch from the Tag
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TagInclude | null
  }



  /**
   * Model Geography
   */


  export type AggregateGeography = {
    count: GeographyCountAggregateOutputType | null
    avg: GeographyAvgAggregateOutputType | null
    sum: GeographySumAggregateOutputType | null
    min: GeographyMinAggregateOutputType | null
    max: GeographyMaxAggregateOutputType | null
  }

  export type GeographyAvgAggregateOutputType = {
    id: number
    ordering: number | null
  }

  export type GeographySumAggregateOutputType = {
    id: number
    ordering: number | null
  }

  export type GeographyMinAggregateOutputType = {
    id: number
    layer: string | null
    title: string | null
    ordering: number | null
  }

  export type GeographyMaxAggregateOutputType = {
    id: number
    layer: string | null
    title: string | null
    ordering: number | null
  }

  export type GeographyCountAggregateOutputType = {
    id: number
    layer: number | null
    title: number | null
    ordering: number | null
    _all: number
  }


  export type GeographyAvgAggregateInputType = {
    id?: true
    ordering?: true
  }

  export type GeographySumAggregateInputType = {
    id?: true
    ordering?: true
  }

  export type GeographyMinAggregateInputType = {
    id?: true
    layer?: true
    title?: true
    ordering?: true
  }

  export type GeographyMaxAggregateInputType = {
    id?: true
    layer?: true
    title?: true
    ordering?: true
  }

  export type GeographyCountAggregateInputType = {
    id?: true
    layer?: true
    title?: true
    ordering?: true
    _all?: true
  }

  export type GeographyAggregateArgs = {
    /**
     * Filter which Geography to aggregate.
    **/
    where?: GeographyWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Geographies to fetch.
    **/
    orderBy?: Enumerable<GeographyOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: GeographyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Geographies from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Geographies.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Geographies
    **/
    count?: true | GeographyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: GeographyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: GeographySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: GeographyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: GeographyMaxAggregateInputType
  }

  export type GetGeographyAggregateType<T extends GeographyAggregateArgs> = {
    [P in keyof T & keyof AggregateGeography]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeography[P]>
      : GetScalarType<T[P], AggregateGeography[P]>
  }



  export type GeographySelect = {
    id?: boolean
    layer?: boolean
    title?: boolean
    ordering?: boolean
    from_Indicator_geographies?: boolean | IndicatorFindManyArgs
    from_Slide_geography?: boolean | SlideFindManyArgs
  }

  export type GeographyInclude = {
    from_Indicator_geographies?: boolean | IndicatorFindManyArgs
    from_Slide_geography?: boolean | SlideFindManyArgs
  }

  export type GeographyGetPayload<
    S extends boolean | null | undefined | GeographyArgs,
    U = keyof S
      > = S extends true
        ? Geography
    : S extends undefined
    ? never
    : S extends GeographyArgs | GeographyFindManyArgs
    ?'include' extends U
    ? Geography  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'from_Indicator_geographies'
        ? Array < IndicatorGetPayload<S['include'][P]>>  :
        P extends 'from_Slide_geography'
        ? Array < SlideGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Geography ?Geography [P]
  : 
          P extends 'from_Indicator_geographies'
        ? Array < IndicatorGetPayload<S['select'][P]>>  :
        P extends 'from_Slide_geography'
        ? Array < SlideGetPayload<S['select'][P]>>  : never
  } 
    : Geography
  : Geography


  type GeographyCountArgs = Merge<
    Omit<GeographyFindManyArgs, 'select' | 'include'> & {
      select?: GeographyCountAggregateInputType | true
    }
  >

  export interface GeographyDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Geography that matches the filter.
     * @param {GeographyFindUniqueArgs} args - Arguments to find a Geography
     * @example
     * // Get one Geography
     * const geography = await prisma.geography.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GeographyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GeographyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Geography'> extends True ? CheckSelect<T, Prisma__GeographyClient<Geography>, Prisma__GeographyClient<GeographyGetPayload<T>>> : CheckSelect<T, Prisma__GeographyClient<Geography | null >, Prisma__GeographyClient<GeographyGetPayload<T> | null >>

    /**
     * Find the first Geography that matches the filter.
     * @param {GeographyFindFirstArgs} args - Arguments to find a Geography
     * @example
     * // Get one Geography
     * const geography = await prisma.geography.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GeographyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GeographyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Geography'> extends True ? CheckSelect<T, Prisma__GeographyClient<Geography>, Prisma__GeographyClient<GeographyGetPayload<T>>> : CheckSelect<T, Prisma__GeographyClient<Geography | null >, Prisma__GeographyClient<GeographyGetPayload<T> | null >>

    /**
     * Find zero or more Geographies that matches the filter.
     * @param {GeographyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Geographies
     * const geographies = await prisma.geography.findMany()
     * 
     * // Get first 10 Geographies
     * const geographies = await prisma.geography.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const geographyWithIdOnly = await prisma.geography.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GeographyFindManyArgs>(
      args?: SelectSubset<T, GeographyFindManyArgs>
    ): CheckSelect<T, Promise<Array<Geography>>, Promise<Array<GeographyGetPayload<T>>>>

    /**
     * Create a Geography.
     * @param {GeographyCreateArgs} args - Arguments to create a Geography.
     * @example
     * // Create one Geography
     * const Geography = await prisma.geography.create({
     *   data: {
     *     // ... data to create a Geography
     *   }
     * })
     * 
    **/
    create<T extends GeographyCreateArgs>(
      args: SelectSubset<T, GeographyCreateArgs>
    ): CheckSelect<T, Prisma__GeographyClient<Geography>, Prisma__GeographyClient<GeographyGetPayload<T>>>

    /**
     * Delete a Geography.
     * @param {GeographyDeleteArgs} args - Arguments to delete one Geography.
     * @example
     * // Delete one Geography
     * const Geography = await prisma.geography.delete({
     *   where: {
     *     // ... filter to delete one Geography
     *   }
     * })
     * 
    **/
    delete<T extends GeographyDeleteArgs>(
      args: SelectSubset<T, GeographyDeleteArgs>
    ): CheckSelect<T, Prisma__GeographyClient<Geography>, Prisma__GeographyClient<GeographyGetPayload<T>>>

    /**
     * Update one Geography.
     * @param {GeographyUpdateArgs} args - Arguments to update one Geography.
     * @example
     * // Update one Geography
     * const geography = await prisma.geography.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GeographyUpdateArgs>(
      args: SelectSubset<T, GeographyUpdateArgs>
    ): CheckSelect<T, Prisma__GeographyClient<Geography>, Prisma__GeographyClient<GeographyGetPayload<T>>>

    /**
     * Delete zero or more Geographies.
     * @param {GeographyDeleteManyArgs} args - Arguments to filter Geographies to delete.
     * @example
     * // Delete a few Geographies
     * const { count } = await prisma.geography.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GeographyDeleteManyArgs>(
      args?: SelectSubset<T, GeographyDeleteManyArgs>
    ): Promise<BatchPayload>

    /**
     * Update zero or more Geographies.
     * @param {GeographyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Geographies
     * const geography = await prisma.geography.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GeographyUpdateManyArgs>(
      args: SelectSubset<T, GeographyUpdateManyArgs>
    ): Promise<BatchPayload>

    /**
     * Create or update one Geography.
     * @param {GeographyUpsertArgs} args - Arguments to update or create a Geography.
     * @example
     * // Update or create a Geography
     * const geography = await prisma.geography.upsert({
     *   create: {
     *     // ... data to create a Geography
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Geography we want to update
     *   }
     * })
    **/
    upsert<T extends GeographyUpsertArgs>(
      args: SelectSubset<T, GeographyUpsertArgs>
    ): CheckSelect<T, Prisma__GeographyClient<Geography>, Prisma__GeographyClient<GeographyGetPayload<T>>>

    /**
     * Count the number of Geographies.
     * @param {GeographyCountArgs} args - Arguments to filter Geographies to count.
     * @example
     * // Count the number of Geographies
     * const count = await prisma.geography.count({
     *   where: {
     *     // ... the filter for the Geographies we want to count
     *   }
     * })
    **/
    count<T extends GeographyCountArgs>(
      args?: Subset<T, GeographyCountArgs>,
    ): Promise<
      T extends Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeographyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Geography.
     * @param {GeographyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GeographyAggregateArgs>(args: Subset<T, GeographyAggregateArgs>): Promise<GetGeographyAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Geography.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GeographyClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    from_Indicator_geographies<T extends IndicatorFindManyArgs = {}>(args?: Subset<T, IndicatorFindManyArgs>): CheckSelect<T, Promise<Array<Indicator>>, Promise<Array<IndicatorGetPayload<T>>>>;

    from_Slide_geography<T extends SlideFindManyArgs = {}>(args?: Subset<T, SlideFindManyArgs>): CheckSelect<T, Promise<Array<Slide>>, Promise<Array<SlideGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Geography findUnique
   */
  export type GeographyFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Geography
    **/
    select?: GeographySelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GeographyInclude | null
    /**
     * Throw an Error if a Geography can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Geography to fetch.
    **/
    where: GeographyWhereUniqueInput
  }


  /**
   * Geography findFirst
   */
  export type GeographyFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Geography
    **/
    select?: GeographySelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GeographyInclude | null
    /**
     * Throw an Error if a Geography can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Geography to fetch.
    **/
    where?: GeographyWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Geographies to fetch.
    **/
    orderBy?: Enumerable<GeographyOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Geographies.
    **/
    cursor?: GeographyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Geographies from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Geographies.
    **/
    skip?: number
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs
     * 
     * Filter by unique combinations of Geographies.
    **/
    distinct?: Enumerable<GeographyScalarFieldEnum>
  }


  /**
   * Geography findMany
   */
  export type GeographyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Geography
    **/
    select?: GeographySelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GeographyInclude | null
    /**
     * Filter, which Geographies to fetch.
    **/
    where?: GeographyWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Geographies to fetch.
    **/
    orderBy?: Enumerable<GeographyOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Geographies.
    **/
    cursor?: GeographyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Geographies from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Geographies.
    **/
    skip?: number
    distinct?: Enumerable<GeographyScalarFieldEnum>
  }


  /**
   * Geography create
   */
  export type GeographyCreateArgs = {
    /**
     * Select specific fields to fetch from the Geography
    **/
    select?: GeographySelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GeographyInclude | null
    /**
     * The data needed to create a Geography.
    **/
    data: XOR<GeographyUncheckedCreateInput, GeographyCreateInput>
  }


  /**
   * Geography update
   */
  export type GeographyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Geography
    **/
    select?: GeographySelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GeographyInclude | null
    /**
     * The data needed to update a Geography.
    **/
    data: XOR<GeographyUncheckedUpdateInput, GeographyUpdateInput>
    /**
     * Choose, which Geography to update.
    **/
    where: GeographyWhereUniqueInput
  }


  /**
   * Geography updateMany
   */
  export type GeographyUpdateManyArgs = {
    data: XOR<GeographyUncheckedUpdateManyInput, GeographyUpdateManyMutationInput>
    where?: GeographyWhereInput
  }


  /**
   * Geography upsert
   */
  export type GeographyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Geography
    **/
    select?: GeographySelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GeographyInclude | null
    /**
     * The filter to search for the Geography to update in case it exists.
    **/
    where: GeographyWhereUniqueInput
    /**
     * In case the Geography found by the `where` argument doesn't exist, create a new Geography with this data.
    **/
    create: XOR<GeographyUncheckedCreateInput, GeographyCreateInput>
    /**
     * In case the Geography was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<GeographyUncheckedUpdateInput, GeographyUpdateInput>
  }


  /**
   * Geography delete
   */
  export type GeographyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Geography
    **/
    select?: GeographySelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GeographyInclude | null
    /**
     * Filter which Geography to delete.
    **/
    where: GeographyWhereUniqueInput
  }


  /**
   * Geography deleteMany
   */
  export type GeographyDeleteManyArgs = {
    where?: GeographyWhereInput
  }


  /**
   * Geography without action
   */
  export type GeographyArgs = {
    /**
     * Select specific fields to fetch from the Geography
    **/
    select?: GeographySelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GeographyInclude | null
  }



  /**
   * Model Indicator
   */


  export type AggregateIndicator = {
    count: IndicatorCountAggregateOutputType | null
    avg: IndicatorAvgAggregateOutputType | null
    sum: IndicatorSumAggregateOutputType | null
    min: IndicatorMinAggregateOutputType | null
    max: IndicatorMaxAggregateOutputType | null
  }

  export type IndicatorAvgAggregateOutputType = {
    id: number
    year: number | null
  }

  export type IndicatorSumAggregateOutputType = {
    id: number
    year: number | null
  }

  export type IndicatorMinAggregateOutputType = {
    id: number
    varname: string | null
    title: string | null
    domain: string | null
    year: number | null
    source: string | null
    url: string | null
  }

  export type IndicatorMaxAggregateOutputType = {
    id: number
    varname: string | null
    title: string | null
    domain: string | null
    year: number | null
    source: string | null
    url: string | null
  }

  export type IndicatorCountAggregateOutputType = {
    id: number
    varname: number | null
    title: number | null
    domain: number | null
    year: number | null
    source: number | null
    url: number | null
    _all: number
  }


  export type IndicatorAvgAggregateInputType = {
    id?: true
    year?: true
  }

  export type IndicatorSumAggregateInputType = {
    id?: true
    year?: true
  }

  export type IndicatorMinAggregateInputType = {
    id?: true
    varname?: true
    title?: true
    domain?: true
    year?: true
    source?: true
    url?: true
  }

  export type IndicatorMaxAggregateInputType = {
    id?: true
    varname?: true
    title?: true
    domain?: true
    year?: true
    source?: true
    url?: true
  }

  export type IndicatorCountAggregateInputType = {
    id?: true
    varname?: true
    title?: true
    domain?: true
    year?: true
    source?: true
    url?: true
    _all?: true
  }

  export type IndicatorAggregateArgs = {
    /**
     * Filter which Indicator to aggregate.
    **/
    where?: IndicatorWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Indicators to fetch.
    **/
    orderBy?: Enumerable<IndicatorOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: IndicatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indicators from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indicators.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Indicators
    **/
    count?: true | IndicatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: IndicatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: IndicatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: IndicatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: IndicatorMaxAggregateInputType
  }

  export type GetIndicatorAggregateType<T extends IndicatorAggregateArgs> = {
    [P in keyof T & keyof AggregateIndicator]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndicator[P]>
      : GetScalarType<T[P], AggregateIndicator[P]>
  }



  export type IndicatorSelect = {
    id?: boolean
    varname?: boolean
    title?: boolean
    domain?: boolean
    year?: boolean
    source?: boolean
    url?: boolean
    geographies?: boolean | GeographyFindManyArgs
    from_Slide_indicator?: boolean | SlideFindManyArgs
  }

  export type IndicatorInclude = {
    geographies?: boolean | GeographyFindManyArgs
    from_Slide_indicator?: boolean | SlideFindManyArgs
  }

  export type IndicatorGetPayload<
    S extends boolean | null | undefined | IndicatorArgs,
    U = keyof S
      > = S extends true
        ? Indicator
    : S extends undefined
    ? never
    : S extends IndicatorArgs | IndicatorFindManyArgs
    ?'include' extends U
    ? Indicator  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'geographies'
        ? Array < GeographyGetPayload<S['include'][P]>>  :
        P extends 'from_Slide_indicator'
        ? Array < SlideGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Indicator ?Indicator [P]
  : 
          P extends 'geographies'
        ? Array < GeographyGetPayload<S['select'][P]>>  :
        P extends 'from_Slide_indicator'
        ? Array < SlideGetPayload<S['select'][P]>>  : never
  } 
    : Indicator
  : Indicator


  type IndicatorCountArgs = Merge<
    Omit<IndicatorFindManyArgs, 'select' | 'include'> & {
      select?: IndicatorCountAggregateInputType | true
    }
  >

  export interface IndicatorDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Indicator that matches the filter.
     * @param {IndicatorFindUniqueArgs} args - Arguments to find a Indicator
     * @example
     * // Get one Indicator
     * const indicator = await prisma.indicator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IndicatorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, IndicatorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Indicator'> extends True ? CheckSelect<T, Prisma__IndicatorClient<Indicator>, Prisma__IndicatorClient<IndicatorGetPayload<T>>> : CheckSelect<T, Prisma__IndicatorClient<Indicator | null >, Prisma__IndicatorClient<IndicatorGetPayload<T> | null >>

    /**
     * Find the first Indicator that matches the filter.
     * @param {IndicatorFindFirstArgs} args - Arguments to find a Indicator
     * @example
     * // Get one Indicator
     * const indicator = await prisma.indicator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IndicatorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, IndicatorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Indicator'> extends True ? CheckSelect<T, Prisma__IndicatorClient<Indicator>, Prisma__IndicatorClient<IndicatorGetPayload<T>>> : CheckSelect<T, Prisma__IndicatorClient<Indicator | null >, Prisma__IndicatorClient<IndicatorGetPayload<T> | null >>

    /**
     * Find zero or more Indicators that matches the filter.
     * @param {IndicatorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Indicators
     * const indicators = await prisma.indicator.findMany()
     * 
     * // Get first 10 Indicators
     * const indicators = await prisma.indicator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const indicatorWithIdOnly = await prisma.indicator.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends IndicatorFindManyArgs>(
      args?: SelectSubset<T, IndicatorFindManyArgs>
    ): CheckSelect<T, Promise<Array<Indicator>>, Promise<Array<IndicatorGetPayload<T>>>>

    /**
     * Create a Indicator.
     * @param {IndicatorCreateArgs} args - Arguments to create a Indicator.
     * @example
     * // Create one Indicator
     * const Indicator = await prisma.indicator.create({
     *   data: {
     *     // ... data to create a Indicator
     *   }
     * })
     * 
    **/
    create<T extends IndicatorCreateArgs>(
      args: SelectSubset<T, IndicatorCreateArgs>
    ): CheckSelect<T, Prisma__IndicatorClient<Indicator>, Prisma__IndicatorClient<IndicatorGetPayload<T>>>

    /**
     * Delete a Indicator.
     * @param {IndicatorDeleteArgs} args - Arguments to delete one Indicator.
     * @example
     * // Delete one Indicator
     * const Indicator = await prisma.indicator.delete({
     *   where: {
     *     // ... filter to delete one Indicator
     *   }
     * })
     * 
    **/
    delete<T extends IndicatorDeleteArgs>(
      args: SelectSubset<T, IndicatorDeleteArgs>
    ): CheckSelect<T, Prisma__IndicatorClient<Indicator>, Prisma__IndicatorClient<IndicatorGetPayload<T>>>

    /**
     * Update one Indicator.
     * @param {IndicatorUpdateArgs} args - Arguments to update one Indicator.
     * @example
     * // Update one Indicator
     * const indicator = await prisma.indicator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IndicatorUpdateArgs>(
      args: SelectSubset<T, IndicatorUpdateArgs>
    ): CheckSelect<T, Prisma__IndicatorClient<Indicator>, Prisma__IndicatorClient<IndicatorGetPayload<T>>>

    /**
     * Delete zero or more Indicators.
     * @param {IndicatorDeleteManyArgs} args - Arguments to filter Indicators to delete.
     * @example
     * // Delete a few Indicators
     * const { count } = await prisma.indicator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IndicatorDeleteManyArgs>(
      args?: SelectSubset<T, IndicatorDeleteManyArgs>
    ): Promise<BatchPayload>

    /**
     * Update zero or more Indicators.
     * @param {IndicatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Indicators
     * const indicator = await prisma.indicator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IndicatorUpdateManyArgs>(
      args: SelectSubset<T, IndicatorUpdateManyArgs>
    ): Promise<BatchPayload>

    /**
     * Create or update one Indicator.
     * @param {IndicatorUpsertArgs} args - Arguments to update or create a Indicator.
     * @example
     * // Update or create a Indicator
     * const indicator = await prisma.indicator.upsert({
     *   create: {
     *     // ... data to create a Indicator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Indicator we want to update
     *   }
     * })
    **/
    upsert<T extends IndicatorUpsertArgs>(
      args: SelectSubset<T, IndicatorUpsertArgs>
    ): CheckSelect<T, Prisma__IndicatorClient<Indicator>, Prisma__IndicatorClient<IndicatorGetPayload<T>>>

    /**
     * Count the number of Indicators.
     * @param {IndicatorCountArgs} args - Arguments to filter Indicators to count.
     * @example
     * // Count the number of Indicators
     * const count = await prisma.indicator.count({
     *   where: {
     *     // ... the filter for the Indicators we want to count
     *   }
     * })
    **/
    count<T extends IndicatorCountArgs>(
      args?: Subset<T, IndicatorCountArgs>,
    ): Promise<
      T extends Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndicatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Indicator.
     * @param {IndicatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IndicatorAggregateArgs>(args: Subset<T, IndicatorAggregateArgs>): Promise<GetIndicatorAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Indicator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__IndicatorClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    geographies<T extends GeographyFindManyArgs = {}>(args?: Subset<T, GeographyFindManyArgs>): CheckSelect<T, Promise<Array<Geography>>, Promise<Array<GeographyGetPayload<T>>>>;

    from_Slide_indicator<T extends SlideFindManyArgs = {}>(args?: Subset<T, SlideFindManyArgs>): CheckSelect<T, Promise<Array<Slide>>, Promise<Array<SlideGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Indicator findUnique
   */
  export type IndicatorFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Indicator
    **/
    select?: IndicatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: IndicatorInclude | null
    /**
     * Throw an Error if a Indicator can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Indicator to fetch.
    **/
    where: IndicatorWhereUniqueInput
  }


  /**
   * Indicator findFirst
   */
  export type IndicatorFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Indicator
    **/
    select?: IndicatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: IndicatorInclude | null
    /**
     * Throw an Error if a Indicator can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Indicator to fetch.
    **/
    where?: IndicatorWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Indicators to fetch.
    **/
    orderBy?: Enumerable<IndicatorOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Indicators.
    **/
    cursor?: IndicatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indicators from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indicators.
    **/
    skip?: number
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs
     * 
     * Filter by unique combinations of Indicators.
    **/
    distinct?: Enumerable<IndicatorScalarFieldEnum>
  }


  /**
   * Indicator findMany
   */
  export type IndicatorFindManyArgs = {
    /**
     * Select specific fields to fetch from the Indicator
    **/
    select?: IndicatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: IndicatorInclude | null
    /**
     * Filter, which Indicators to fetch.
    **/
    where?: IndicatorWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Indicators to fetch.
    **/
    orderBy?: Enumerable<IndicatorOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Indicators.
    **/
    cursor?: IndicatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indicators from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indicators.
    **/
    skip?: number
    distinct?: Enumerable<IndicatorScalarFieldEnum>
  }


  /**
   * Indicator create
   */
  export type IndicatorCreateArgs = {
    /**
     * Select specific fields to fetch from the Indicator
    **/
    select?: IndicatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: IndicatorInclude | null
    /**
     * The data needed to create a Indicator.
    **/
    data: XOR<IndicatorUncheckedCreateInput, IndicatorCreateInput>
  }


  /**
   * Indicator update
   */
  export type IndicatorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Indicator
    **/
    select?: IndicatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: IndicatorInclude | null
    /**
     * The data needed to update a Indicator.
    **/
    data: XOR<IndicatorUncheckedUpdateInput, IndicatorUpdateInput>
    /**
     * Choose, which Indicator to update.
    **/
    where: IndicatorWhereUniqueInput
  }


  /**
   * Indicator updateMany
   */
  export type IndicatorUpdateManyArgs = {
    data: XOR<IndicatorUncheckedUpdateManyInput, IndicatorUpdateManyMutationInput>
    where?: IndicatorWhereInput
  }


  /**
   * Indicator upsert
   */
  export type IndicatorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Indicator
    **/
    select?: IndicatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: IndicatorInclude | null
    /**
     * The filter to search for the Indicator to update in case it exists.
    **/
    where: IndicatorWhereUniqueInput
    /**
     * In case the Indicator found by the `where` argument doesn't exist, create a new Indicator with this data.
    **/
    create: XOR<IndicatorUncheckedCreateInput, IndicatorCreateInput>
    /**
     * In case the Indicator was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<IndicatorUncheckedUpdateInput, IndicatorUpdateInput>
  }


  /**
   * Indicator delete
   */
  export type IndicatorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Indicator
    **/
    select?: IndicatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: IndicatorInclude | null
    /**
     * Filter which Indicator to delete.
    **/
    where: IndicatorWhereUniqueInput
  }


  /**
   * Indicator deleteMany
   */
  export type IndicatorDeleteManyArgs = {
    where?: IndicatorWhereInput
  }


  /**
   * Indicator without action
   */
  export type IndicatorArgs = {
    /**
     * Select specific fields to fetch from the Indicator
    **/
    select?: IndicatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: IndicatorInclude | null
  }



  /**
   * Model Annotation
   */


  export type AggregateAnnotation = {
    count: AnnotationCountAggregateOutputType | null
    avg: AnnotationAvgAggregateOutputType | null
    sum: AnnotationSumAggregateOutputType | null
    min: AnnotationMinAggregateOutputType | null
    max: AnnotationMaxAggregateOutputType | null
  }

  export type AnnotationAvgAggregateOutputType = {
    id: number
    slideId: number | null
  }

  export type AnnotationSumAggregateOutputType = {
    id: number
    slideId: number | null
  }

  export type AnnotationMinAggregateOutputType = {
    id: number
    feature: string | null
    slideId: number | null
  }

  export type AnnotationMaxAggregateOutputType = {
    id: number
    feature: string | null
    slideId: number | null
  }

  export type AnnotationCountAggregateOutputType = {
    id: number
    feature: number | null
    slideId: number | null
    _all: number
  }


  export type AnnotationAvgAggregateInputType = {
    id?: true
    slideId?: true
  }

  export type AnnotationSumAggregateInputType = {
    id?: true
    slideId?: true
  }

  export type AnnotationMinAggregateInputType = {
    id?: true
    feature?: true
    slideId?: true
  }

  export type AnnotationMaxAggregateInputType = {
    id?: true
    feature?: true
    slideId?: true
  }

  export type AnnotationCountAggregateInputType = {
    id?: true
    feature?: true
    slideId?: true
    _all?: true
  }

  export type AnnotationAggregateArgs = {
    /**
     * Filter which Annotation to aggregate.
    **/
    where?: AnnotationWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Annotations to fetch.
    **/
    orderBy?: Enumerable<AnnotationOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: AnnotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annotations from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annotations.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Annotations
    **/
    count?: true | AnnotationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: AnnotationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: AnnotationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: AnnotationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: AnnotationMaxAggregateInputType
  }

  export type GetAnnotationAggregateType<T extends AnnotationAggregateArgs> = {
    [P in keyof T & keyof AggregateAnnotation]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnotation[P]>
      : GetScalarType<T[P], AggregateAnnotation[P]>
  }



  export type AnnotationSelect = {
    id?: boolean
    feature?: boolean
    slide?: boolean | SlideArgs
    slideId?: boolean
  }

  export type AnnotationInclude = {
    slide?: boolean | SlideArgs
  }

  export type AnnotationGetPayload<
    S extends boolean | null | undefined | AnnotationArgs,
    U = keyof S
      > = S extends true
        ? Annotation
    : S extends undefined
    ? never
    : S extends AnnotationArgs | AnnotationFindManyArgs
    ?'include' extends U
    ? Annotation  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'slide'
        ? SlideGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Annotation ?Annotation [P]
  : 
          P extends 'slide'
        ? SlideGetPayload<S['select'][P]> | null : never
  } 
    : Annotation
  : Annotation


  type AnnotationCountArgs = Merge<
    Omit<AnnotationFindManyArgs, 'select' | 'include'> & {
      select?: AnnotationCountAggregateInputType | true
    }
  >

  export interface AnnotationDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Annotation that matches the filter.
     * @param {AnnotationFindUniqueArgs} args - Arguments to find a Annotation
     * @example
     * // Get one Annotation
     * const annotation = await prisma.annotation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnnotationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AnnotationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Annotation'> extends True ? CheckSelect<T, Prisma__AnnotationClient<Annotation>, Prisma__AnnotationClient<AnnotationGetPayload<T>>> : CheckSelect<T, Prisma__AnnotationClient<Annotation | null >, Prisma__AnnotationClient<AnnotationGetPayload<T> | null >>

    /**
     * Find the first Annotation that matches the filter.
     * @param {AnnotationFindFirstArgs} args - Arguments to find a Annotation
     * @example
     * // Get one Annotation
     * const annotation = await prisma.annotation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnnotationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AnnotationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Annotation'> extends True ? CheckSelect<T, Prisma__AnnotationClient<Annotation>, Prisma__AnnotationClient<AnnotationGetPayload<T>>> : CheckSelect<T, Prisma__AnnotationClient<Annotation | null >, Prisma__AnnotationClient<AnnotationGetPayload<T> | null >>

    /**
     * Find zero or more Annotations that matches the filter.
     * @param {AnnotationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Annotations
     * const annotations = await prisma.annotation.findMany()
     * 
     * // Get first 10 Annotations
     * const annotations = await prisma.annotation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const annotationWithIdOnly = await prisma.annotation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AnnotationFindManyArgs>(
      args?: SelectSubset<T, AnnotationFindManyArgs>
    ): CheckSelect<T, Promise<Array<Annotation>>, Promise<Array<AnnotationGetPayload<T>>>>

    /**
     * Create a Annotation.
     * @param {AnnotationCreateArgs} args - Arguments to create a Annotation.
     * @example
     * // Create one Annotation
     * const Annotation = await prisma.annotation.create({
     *   data: {
     *     // ... data to create a Annotation
     *   }
     * })
     * 
    **/
    create<T extends AnnotationCreateArgs>(
      args: SelectSubset<T, AnnotationCreateArgs>
    ): CheckSelect<T, Prisma__AnnotationClient<Annotation>, Prisma__AnnotationClient<AnnotationGetPayload<T>>>

    /**
     * Delete a Annotation.
     * @param {AnnotationDeleteArgs} args - Arguments to delete one Annotation.
     * @example
     * // Delete one Annotation
     * const Annotation = await prisma.annotation.delete({
     *   where: {
     *     // ... filter to delete one Annotation
     *   }
     * })
     * 
    **/
    delete<T extends AnnotationDeleteArgs>(
      args: SelectSubset<T, AnnotationDeleteArgs>
    ): CheckSelect<T, Prisma__AnnotationClient<Annotation>, Prisma__AnnotationClient<AnnotationGetPayload<T>>>

    /**
     * Update one Annotation.
     * @param {AnnotationUpdateArgs} args - Arguments to update one Annotation.
     * @example
     * // Update one Annotation
     * const annotation = await prisma.annotation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnnotationUpdateArgs>(
      args: SelectSubset<T, AnnotationUpdateArgs>
    ): CheckSelect<T, Prisma__AnnotationClient<Annotation>, Prisma__AnnotationClient<AnnotationGetPayload<T>>>

    /**
     * Delete zero or more Annotations.
     * @param {AnnotationDeleteManyArgs} args - Arguments to filter Annotations to delete.
     * @example
     * // Delete a few Annotations
     * const { count } = await prisma.annotation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnnotationDeleteManyArgs>(
      args?: SelectSubset<T, AnnotationDeleteManyArgs>
    ): Promise<BatchPayload>

    /**
     * Update zero or more Annotations.
     * @param {AnnotationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Annotations
     * const annotation = await prisma.annotation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnnotationUpdateManyArgs>(
      args: SelectSubset<T, AnnotationUpdateManyArgs>
    ): Promise<BatchPayload>

    /**
     * Create or update one Annotation.
     * @param {AnnotationUpsertArgs} args - Arguments to update or create a Annotation.
     * @example
     * // Update or create a Annotation
     * const annotation = await prisma.annotation.upsert({
     *   create: {
     *     // ... data to create a Annotation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Annotation we want to update
     *   }
     * })
    **/
    upsert<T extends AnnotationUpsertArgs>(
      args: SelectSubset<T, AnnotationUpsertArgs>
    ): CheckSelect<T, Prisma__AnnotationClient<Annotation>, Prisma__AnnotationClient<AnnotationGetPayload<T>>>

    /**
     * Count the number of Annotations.
     * @param {AnnotationCountArgs} args - Arguments to filter Annotations to count.
     * @example
     * // Count the number of Annotations
     * const count = await prisma.annotation.count({
     *   where: {
     *     // ... the filter for the Annotations we want to count
     *   }
     * })
    **/
    count<T extends AnnotationCountArgs>(
      args?: Subset<T, AnnotationCountArgs>,
    ): Promise<
      T extends Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnotationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Annotation.
     * @param {AnnotationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnnotationAggregateArgs>(args: Subset<T, AnnotationAggregateArgs>): Promise<GetAnnotationAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Annotation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AnnotationClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    slide<T extends SlideArgs = {}>(args?: Subset<T, SlideArgs>): CheckSelect<T, Prisma__SlideClient<Slide | null >, Prisma__SlideClient<SlideGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Annotation findUnique
   */
  export type AnnotationFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Annotation
    **/
    select?: AnnotationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: AnnotationInclude | null
    /**
     * Throw an Error if a Annotation can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Annotation to fetch.
    **/
    where: AnnotationWhereUniqueInput
  }


  /**
   * Annotation findFirst
   */
  export type AnnotationFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Annotation
    **/
    select?: AnnotationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: AnnotationInclude | null
    /**
     * Throw an Error if a Annotation can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Annotation to fetch.
    **/
    where?: AnnotationWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Annotations to fetch.
    **/
    orderBy?: Enumerable<AnnotationOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Annotations.
    **/
    cursor?: AnnotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annotations from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annotations.
    **/
    skip?: number
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs
     * 
     * Filter by unique combinations of Annotations.
    **/
    distinct?: Enumerable<AnnotationScalarFieldEnum>
  }


  /**
   * Annotation findMany
   */
  export type AnnotationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Annotation
    **/
    select?: AnnotationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: AnnotationInclude | null
    /**
     * Filter, which Annotations to fetch.
    **/
    where?: AnnotationWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Annotations to fetch.
    **/
    orderBy?: Enumerable<AnnotationOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Annotations.
    **/
    cursor?: AnnotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annotations from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annotations.
    **/
    skip?: number
    distinct?: Enumerable<AnnotationScalarFieldEnum>
  }


  /**
   * Annotation create
   */
  export type AnnotationCreateArgs = {
    /**
     * Select specific fields to fetch from the Annotation
    **/
    select?: AnnotationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: AnnotationInclude | null
    /**
     * The data needed to create a Annotation.
    **/
    data: XOR<AnnotationUncheckedCreateInput, AnnotationCreateInput>
  }


  /**
   * Annotation update
   */
  export type AnnotationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Annotation
    **/
    select?: AnnotationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: AnnotationInclude | null
    /**
     * The data needed to update a Annotation.
    **/
    data: XOR<AnnotationUncheckedUpdateInput, AnnotationUpdateInput>
    /**
     * Choose, which Annotation to update.
    **/
    where: AnnotationWhereUniqueInput
  }


  /**
   * Annotation updateMany
   */
  export type AnnotationUpdateManyArgs = {
    data: XOR<AnnotationUncheckedUpdateManyInput, AnnotationUpdateManyMutationInput>
    where?: AnnotationWhereInput
  }


  /**
   * Annotation upsert
   */
  export type AnnotationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Annotation
    **/
    select?: AnnotationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: AnnotationInclude | null
    /**
     * The filter to search for the Annotation to update in case it exists.
    **/
    where: AnnotationWhereUniqueInput
    /**
     * In case the Annotation found by the `where` argument doesn't exist, create a new Annotation with this data.
    **/
    create: XOR<AnnotationUncheckedCreateInput, AnnotationCreateInput>
    /**
     * In case the Annotation was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<AnnotationUncheckedUpdateInput, AnnotationUpdateInput>
  }


  /**
   * Annotation delete
   */
  export type AnnotationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Annotation
    **/
    select?: AnnotationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: AnnotationInclude | null
    /**
     * Filter which Annotation to delete.
    **/
    where: AnnotationWhereUniqueInput
  }


  /**
   * Annotation deleteMany
   */
  export type AnnotationDeleteManyArgs = {
    where?: AnnotationWhereInput
  }


  /**
   * Annotation without action
   */
  export type AnnotationArgs = {
    /**
     * Select specific fields to fetch from the Annotation
    **/
    select?: AnnotationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: AnnotationInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    institution: 'institution',
    language: 'language',
    verified: 'verified',
    verifyId: 'verifyId',
    resetId: 'resetId',
    isAdmin: 'isAdmin',
    password: 'password',
    termsAccepted: 'termsAccepted',
    privacyAccepted: 'privacyAccepted'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SlideScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    order: 'order',
    size: 'size',
    longitude: 'longitude',
    latitude: 'latitude',
    zoom: 'zoom',
    bearing: 'bearing',
    pitch: 'pitch',
    selectedFeature: 'selectedFeature',
    media: 'media',
    imageTitle: 'imageTitle',
    source: 'source',
    url: 'url',
    indicatorId: 'indicatorId',
    geographyId: 'geographyId',
    projectId: 'projectId'
  };

  export type SlideScalarFieldEnum = (typeof SlideScalarFieldEnum)[keyof typeof SlideScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    title: 'title',
    creator: 'creator',
    source: 'source',
    date: 'date',
    url: 'url',
    slideId: 'slideId'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    imageTitle: 'imageTitle',
    source: 'source',
    url: 'url',
    published: 'published',
    gallery: 'gallery',
    updatedAt_utc: 'updatedAt_utc',
    updatedAt_offset: 'updatedAt_offset',
    createdAt_utc: 'createdAt_utc',
    createdAt_offset: 'createdAt_offset',
    userId: 'userId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const GeographyScalarFieldEnum: {
    id: 'id',
    layer: 'layer',
    title: 'title',
    ordering: 'ordering'
  };

  export type GeographyScalarFieldEnum = (typeof GeographyScalarFieldEnum)[keyof typeof GeographyScalarFieldEnum]


  export const IndicatorScalarFieldEnum: {
    id: 'id',
    varname: 'varname',
    title: 'title',
    domain: 'domain',
    year: 'year',
    source: 'source',
    url: 'url'
  };

  export type IndicatorScalarFieldEnum = (typeof IndicatorScalarFieldEnum)[keyof typeof IndicatorScalarFieldEnum]


  export const AnnotationScalarFieldEnum: {
    id: 'id',
    feature: 'feature',
    slideId: 'slideId'
  };

  export type AnnotationScalarFieldEnum = (typeof AnnotationScalarFieldEnum)[keyof typeof AnnotationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    institution?: StringNullableFilter | string | null
    language?: StringNullableFilter | string | null
    verified?: BoolNullableFilter | boolean | null
    verifyId?: StringNullableFilter | string | null
    resetId?: StringNullableFilter | string | null
    isAdmin?: BoolNullableFilter | boolean | null
    password?: StringNullableFilter | string | null
    termsAccepted?: BoolNullableFilter | boolean | null
    privacyAccepted?: BoolNullableFilter | boolean | null
    projects?: ProjectListRelationFilter
  }

  export type UserOrderByInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    institution?: SortOrder
    language?: SortOrder
    verified?: SortOrder
    verifyId?: SortOrder
    resetId?: SortOrder
    isAdmin?: SortOrder
    password?: SortOrder
    termsAccepted?: SortOrder
    privacyAccepted?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type SlideWhereInput = {
    AND?: Enumerable<SlideWhereInput>
    OR?: Enumerable<SlideWhereInput>
    NOT?: Enumerable<SlideWhereInput>
    id?: IntFilter | number
    title?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    order?: IntNullableFilter | number | null
    size?: StringNullableFilter | string | null
    longitude?: FloatNullableFilter | number | null
    latitude?: FloatNullableFilter | number | null
    zoom?: FloatNullableFilter | number | null
    bearing?: FloatNullableFilter | number | null
    pitch?: FloatNullableFilter | number | null
    selectedFeature?: StringNullableFilter | string | null
    media?: StringNullableFilter | string | null
    imageTitle?: StringNullableFilter | string | null
    source?: StringNullableFilter | string | null
    url?: StringNullableFilter | string | null
    indicator?: XOR<IndicatorWhereInput, IndicatorRelationFilter> | null
    indicatorId?: IntNullableFilter | number | null
    geography?: XOR<GeographyWhereInput, GeographyRelationFilter> | null
    geographyId?: IntNullableFilter | number | null
    image?: XOR<ImageWhereInput, ImageRelationFilter> | null
    project?: XOR<ProjectWhereInput, ProjectRelationFilter> | null
    projectId?: IntNullableFilter | number | null
    annotations?: AnnotationListRelationFilter
  }

  export type SlideOrderByInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    size?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    zoom?: SortOrder
    bearing?: SortOrder
    pitch?: SortOrder
    selectedFeature?: SortOrder
    media?: SortOrder
    imageTitle?: SortOrder
    source?: SortOrder
    url?: SortOrder
    indicator?: IndicatorOrderByInput
    indicatorId?: SortOrder
    geography?: GeographyOrderByInput
    geographyId?: SortOrder
    image?: ImageOrderByInput
    project?: ProjectOrderByInput
    projectId?: SortOrder
  }

  export type SlideWhereUniqueInput = {
    id?: number
  }

  export type ImageWhereInput = {
    AND?: Enumerable<ImageWhereInput>
    OR?: Enumerable<ImageWhereInput>
    NOT?: Enumerable<ImageWhereInput>
    id?: IntFilter | number
    title?: StringNullableFilter | string | null
    creator?: StringNullableFilter | string | null
    source?: StringNullableFilter | string | null
    date?: StringNullableFilter | string | null
    url?: StringNullableFilter | string | null
    slide?: XOR<SlideWhereInput, SlideRelationFilter> | null
    slideId?: IntNullableFilter | number | null
  }

  export type ImageOrderByInput = {
    id?: SortOrder
    title?: SortOrder
    creator?: SortOrder
    source?: SortOrder
    date?: SortOrder
    url?: SortOrder
    slideId?: SortOrder
  }

  export type ImageWhereUniqueInput = {
    id?: number
  }

  export type ProjectWhereInput = {
    AND?: Enumerable<ProjectWhereInput>
    OR?: Enumerable<ProjectWhereInput>
    NOT?: Enumerable<ProjectWhereInput>
    id?: IntFilter | number
    title?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    category?: StringNullableFilter | string | null
    imageTitle?: StringNullableFilter | string | null
    source?: StringNullableFilter | string | null
    url?: StringNullableFilter | string | null
    published?: BoolNullableFilter | boolean | null
    gallery?: BoolNullableFilter | boolean | null
    updatedAt_utc?: DateTimeNullableFilter | Date | string | null
    updatedAt_offset?: StringNullableFilter | string | null
    createdAt_utc?: DateTimeNullableFilter | Date | string | null
    createdAt_offset?: StringNullableFilter | string | null
    tags?: TagListRelationFilter
    slides?: SlideListRelationFilter
    user?: XOR<UserWhereInput, UserRelationFilter> | null
    userId?: IntNullableFilter | number | null
  }

  export type ProjectOrderByInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    imageTitle?: SortOrder
    source?: SortOrder
    url?: SortOrder
    published?: SortOrder
    gallery?: SortOrder
    updatedAt_utc?: SortOrder
    updatedAt_offset?: SortOrder
    createdAt_utc?: SortOrder
    createdAt_offset?: SortOrder
    user?: UserOrderByInput
    userId?: SortOrder
  }

  export type ProjectWhereUniqueInput = {
    id?: number
  }

  export type TagWhereInput = {
    AND?: Enumerable<TagWhereInput>
    OR?: Enumerable<TagWhereInput>
    NOT?: Enumerable<TagWhereInput>
    id?: IntFilter | number
    name?: StringNullableFilter | string | null
    from_Project_tags?: ProjectListRelationFilter
  }

  export type TagOrderByInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type GeographyWhereInput = {
    AND?: Enumerable<GeographyWhereInput>
    OR?: Enumerable<GeographyWhereInput>
    NOT?: Enumerable<GeographyWhereInput>
    id?: IntFilter | number
    layer?: StringNullableFilter | string | null
    title?: StringNullableFilter | string | null
    ordering?: IntNullableFilter | number | null
    from_Indicator_geographies?: IndicatorListRelationFilter
    from_Slide_geography?: SlideListRelationFilter
  }

  export type GeographyOrderByInput = {
    id?: SortOrder
    layer?: SortOrder
    title?: SortOrder
    ordering?: SortOrder
  }

  export type GeographyWhereUniqueInput = {
    id?: number
  }

  export type IndicatorWhereInput = {
    AND?: Enumerable<IndicatorWhereInput>
    OR?: Enumerable<IndicatorWhereInput>
    NOT?: Enumerable<IndicatorWhereInput>
    id?: IntFilter | number
    varname?: StringNullableFilter | string | null
    title?: StringNullableFilter | string | null
    domain?: StringNullableFilter | string | null
    year?: IntNullableFilter | number | null
    source?: StringNullableFilter | string | null
    url?: StringNullableFilter | string | null
    geographies?: GeographyListRelationFilter
    from_Slide_indicator?: SlideListRelationFilter
  }

  export type IndicatorOrderByInput = {
    id?: SortOrder
    varname?: SortOrder
    title?: SortOrder
    domain?: SortOrder
    year?: SortOrder
    source?: SortOrder
    url?: SortOrder
  }

  export type IndicatorWhereUniqueInput = {
    id?: number
  }

  export type AnnotationWhereInput = {
    AND?: Enumerable<AnnotationWhereInput>
    OR?: Enumerable<AnnotationWhereInput>
    NOT?: Enumerable<AnnotationWhereInput>
    id?: IntFilter | number
    feature?: StringNullableFilter | string | null
    slide?: XOR<SlideWhereInput, SlideRelationFilter> | null
    slideId?: IntNullableFilter | number | null
  }

  export type AnnotationOrderByInput = {
    id?: SortOrder
    feature?: SortOrder
    slide?: SlideOrderByInput
    slideId?: SortOrder
  }

  export type AnnotationWhereUniqueInput = {
    id?: number
  }

  export type UserCreateInput = {
    name?: string | null
    email?: string | null
    institution?: string | null
    language?: string | null
    verified?: boolean | null
    verifyId?: string | null
    resetId?: string | null
    isAdmin?: boolean | null
    password?: string | null
    termsAccepted?: boolean | null
    privacyAccepted?: boolean | null
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    email?: string | null
    institution?: string | null
    language?: string | null
    verified?: boolean | null
    verifyId?: string | null
    resetId?: string | null
    isAdmin?: boolean | null
    password?: string | null
    termsAccepted?: boolean | null
    privacyAccepted?: boolean | null
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifyId?: NullableStringFieldUpdateOperationsInput | string | null
    resetId?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    termsAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    privacyAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    projects?: ProjectUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifyId?: NullableStringFieldUpdateOperationsInput | string | null
    resetId?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    termsAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    privacyAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    projects?: ProjectUncheckedUpdateManyWithoutUserInput
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifyId?: NullableStringFieldUpdateOperationsInput | string | null
    resetId?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    termsAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    privacyAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifyId?: NullableStringFieldUpdateOperationsInput | string | null
    resetId?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    termsAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    privacyAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SlideCreateInput = {
    title?: string | null
    description?: string | null
    order?: number | null
    size?: string | null
    longitude?: number | null
    latitude?: number | null
    zoom?: number | null
    bearing?: number | null
    pitch?: number | null
    selectedFeature?: string | null
    media?: string | null
    imageTitle?: string | null
    source?: string | null
    url?: string | null
    indicator?: IndicatorCreateNestedOneWithoutFrom_Slide_indicatorInput
    geography?: GeographyCreateNestedOneWithoutFrom_Slide_geographyInput
    image?: ImageCreateNestedOneWithoutSlideInput
    project?: ProjectCreateNestedOneWithoutSlidesInput
    annotations?: AnnotationCreateNestedManyWithoutSlideInput
  }

  export type SlideUncheckedCreateInput = {
    id?: number
    title?: string | null
    description?: string | null
    order?: number | null
    size?: string | null
    longitude?: number | null
    latitude?: number | null
    zoom?: number | null
    bearing?: number | null
    pitch?: number | null
    selectedFeature?: string | null
    media?: string | null
    imageTitle?: string | null
    source?: string | null
    url?: string | null
    indicatorId?: number | null
    geographyId?: number | null
    projectId?: number | null
    image?: ImageUncheckedCreateNestedOneWithoutSlideInput
    annotations?: AnnotationUncheckedCreateNestedManyWithoutSlideInput
  }

  export type SlideUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    pitch?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedFeature?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    indicator?: IndicatorUpdateOneWithoutFrom_Slide_indicatorInput
    geography?: GeographyUpdateOneWithoutFrom_Slide_geographyInput
    image?: ImageUpdateOneWithoutSlideInput
    project?: ProjectUpdateOneWithoutSlidesInput
    annotations?: AnnotationUpdateManyWithoutSlideInput
  }

  export type SlideUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    pitch?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedFeature?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    indicatorId?: NullableIntFieldUpdateOperationsInput | number | null
    geographyId?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    image?: ImageUncheckedUpdateOneWithoutSlideInput
    annotations?: AnnotationUncheckedUpdateManyWithoutSlideInput
  }

  export type SlideUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    pitch?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedFeature?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SlideUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    pitch?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedFeature?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    indicatorId?: NullableIntFieldUpdateOperationsInput | number | null
    geographyId?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImageCreateInput = {
    title?: string | null
    creator?: string | null
    source?: string | null
    date?: string | null
    url?: string | null
    slide?: SlideCreateNestedOneWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    title?: string | null
    creator?: string | null
    source?: string | null
    date?: string | null
    url?: string | null
    slideId?: number | null
  }

  export type ImageUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    slide?: SlideUpdateOneWithoutImageInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    slideId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImageUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    slideId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectCreateInput = {
    title?: string | null
    description?: string | null
    category?: string | null
    imageTitle?: string | null
    source?: string | null
    url?: string | null
    published?: boolean | null
    gallery?: boolean | null
    updatedAt_utc?: Date | string | null
    updatedAt_offset?: string | null
    createdAt_utc?: Date | string | null
    createdAt_offset?: string | null
    tags?: TagCreateNestedManyWithoutFrom_Project_tagsInput
    slides?: SlideCreateNestedManyWithoutProjectInput
    user?: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    title?: string | null
    description?: string | null
    category?: string | null
    imageTitle?: string | null
    source?: string | null
    url?: string | null
    published?: boolean | null
    gallery?: boolean | null
    updatedAt_utc?: Date | string | null
    updatedAt_offset?: string | null
    createdAt_utc?: Date | string | null
    createdAt_offset?: string | null
    userId?: number | null
    slides?: SlideUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gallery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TagUpdateManyWithoutFrom_Project_tagsInput
    slides?: SlideUpdateManyWithoutProjectInput
    user?: UserUpdateOneWithoutProjectsInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gallery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    slides?: SlideUncheckedUpdateManyWithoutProjectInput
  }

  export type ProjectUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gallery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gallery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TagCreateInput = {
    name?: string | null
    from_Project_tags?: ProjectCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    name?: string | null
  }

  export type TagUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    from_Project_tags?: ProjectUpdateManyWithoutTagsInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeographyCreateInput = {
    layer?: string | null
    title?: string | null
    ordering?: number | null
    from_Indicator_geographies?: IndicatorCreateNestedManyWithoutGeographiesInput
    from_Slide_geography?: SlideCreateNestedManyWithoutGeographyInput
  }

  export type GeographyUncheckedCreateInput = {
    id?: number
    layer?: string | null
    title?: string | null
    ordering?: number | null
    from_Slide_geography?: SlideUncheckedCreateNestedManyWithoutGeographyInput
  }

  export type GeographyUpdateInput = {
    layer?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    ordering?: NullableIntFieldUpdateOperationsInput | number | null
    from_Indicator_geographies?: IndicatorUpdateManyWithoutGeographiesInput
    from_Slide_geography?: SlideUpdateManyWithoutGeographyInput
  }

  export type GeographyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    layer?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    ordering?: NullableIntFieldUpdateOperationsInput | number | null
    from_Slide_geography?: SlideUncheckedUpdateManyWithoutGeographyInput
  }

  export type GeographyUpdateManyMutationInput = {
    layer?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    ordering?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GeographyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    layer?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    ordering?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IndicatorCreateInput = {
    varname?: string | null
    title?: string | null
    domain?: string | null
    year?: number | null
    source?: string | null
    url?: string | null
    geographies?: GeographyCreateNestedManyWithoutFrom_Indicator_geographiesInput
    from_Slide_indicator?: SlideCreateNestedManyWithoutIndicatorInput
  }

  export type IndicatorUncheckedCreateInput = {
    id?: number
    varname?: string | null
    title?: string | null
    domain?: string | null
    year?: number | null
    source?: string | null
    url?: string | null
    from_Slide_indicator?: SlideUncheckedCreateNestedManyWithoutIndicatorInput
  }

  export type IndicatorUpdateInput = {
    varname?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    geographies?: GeographyUpdateManyWithoutFrom_Indicator_geographiesInput
    from_Slide_indicator?: SlideUpdateManyWithoutIndicatorInput
  }

  export type IndicatorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    varname?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    from_Slide_indicator?: SlideUncheckedUpdateManyWithoutIndicatorInput
  }

  export type IndicatorUpdateManyMutationInput = {
    varname?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IndicatorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    varname?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnnotationCreateInput = {
    feature?: string | null
    slide?: SlideCreateNestedOneWithoutAnnotationsInput
  }

  export type AnnotationUncheckedCreateInput = {
    id?: number
    feature?: string | null
    slideId?: number | null
  }

  export type AnnotationUpdateInput = {
    feature?: NullableStringFieldUpdateOperationsInput | string | null
    slide?: SlideUpdateOneWithoutAnnotationsInput
  }

  export type AnnotationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    feature?: NullableStringFieldUpdateOperationsInput | string | null
    slideId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AnnotationUpdateManyMutationInput = {
    feature?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnnotationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    feature?: NullableStringFieldUpdateOperationsInput | string | null
    slideId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type IndicatorRelationFilter = {
    is?: IndicatorWhereInput | null
    isNot?: IndicatorWhereInput | null
  }

  export type GeographyRelationFilter = {
    is?: GeographyWhereInput | null
    isNot?: GeographyWhereInput | null
  }

  export type ImageRelationFilter = {
    is?: ImageWhereInput | null
    isNot?: ImageWhereInput | null
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type AnnotationListRelationFilter = {
    every?: AnnotationWhereInput
    some?: AnnotationWhereInput
    none?: AnnotationWhereInput
  }

  export type SlideRelationFilter = {
    is?: SlideWhereInput | null
    isNot?: SlideWhereInput | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type SlideListRelationFilter = {
    every?: SlideWhereInput
    some?: SlideWhereInput
    none?: SlideWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type IndicatorListRelationFilter = {
    every?: IndicatorWhereInput
    some?: IndicatorWhereInput
    none?: IndicatorWhereInput
  }

  export type GeographyListRelationFilter = {
    every?: GeographyWhereInput
    some?: GeographyWhereInput
    none?: GeographyWhereInput
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ProjectUncheckedCreateWithoutUserInput>, Enumerable<ProjectCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutuserInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ProjectUncheckedCreateWithoutUserInput>, Enumerable<ProjectCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutuserInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ProjectUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ProjectUncheckedCreateWithoutUserInput>, Enumerable<ProjectCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutuserInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutUserInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ProjectUncheckedCreateWithoutUserInput>, Enumerable<ProjectCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutuserInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutUserInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type IndicatorCreateNestedOneWithoutFrom_Slide_indicatorInput = {
    create?: XOR<IndicatorUncheckedCreateWithoutFrom_Slide_indicatorInput, IndicatorCreateWithoutFrom_Slide_indicatorInput>
    connectOrCreate?: IndicatorCreateOrConnectWithoutfrom_Slide_indicatorInput
    connect?: IndicatorWhereUniqueInput
  }

  export type GeographyCreateNestedOneWithoutFrom_Slide_geographyInput = {
    create?: XOR<GeographyUncheckedCreateWithoutFrom_Slide_geographyInput, GeographyCreateWithoutFrom_Slide_geographyInput>
    connectOrCreate?: GeographyCreateOrConnectWithoutfrom_Slide_geographyInput
    connect?: GeographyWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutSlideInput = {
    create?: XOR<ImageUncheckedCreateWithoutSlideInput, ImageCreateWithoutSlideInput>
    connectOrCreate?: ImageCreateOrConnectWithoutslideInput
    connect?: ImageWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutSlidesInput = {
    create?: XOR<ProjectUncheckedCreateWithoutSlidesInput, ProjectCreateWithoutSlidesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutslidesInput
    connect?: ProjectWhereUniqueInput
  }

  export type AnnotationCreateNestedManyWithoutSlideInput = {
    create?: XOR<Enumerable<AnnotationUncheckedCreateWithoutSlideInput>, Enumerable<AnnotationCreateWithoutSlideInput>>
    connectOrCreate?: Enumerable<AnnotationCreateOrConnectWithoutslideInput>
    connect?: Enumerable<AnnotationWhereUniqueInput>
  }

  export type ImageUncheckedCreateNestedOneWithoutSlideInput = {
    create?: XOR<ImageUncheckedCreateWithoutSlideInput, ImageCreateWithoutSlideInput>
    connectOrCreate?: ImageCreateOrConnectWithoutslideInput
    connect?: ImageWhereUniqueInput
  }

  export type AnnotationUncheckedCreateNestedManyWithoutSlideInput = {
    create?: XOR<Enumerable<AnnotationUncheckedCreateWithoutSlideInput>, Enumerable<AnnotationCreateWithoutSlideInput>>
    connectOrCreate?: Enumerable<AnnotationCreateOrConnectWithoutslideInput>
    connect?: Enumerable<AnnotationWhereUniqueInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IndicatorUpdateOneWithoutFrom_Slide_indicatorInput = {
    create?: XOR<IndicatorUncheckedCreateWithoutFrom_Slide_indicatorInput, IndicatorCreateWithoutFrom_Slide_indicatorInput>
    connectOrCreate?: IndicatorCreateOrConnectWithoutfrom_Slide_indicatorInput
    upsert?: IndicatorUpsertWithoutFrom_Slide_indicatorInput
    connect?: IndicatorWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<IndicatorUncheckedUpdateWithoutFrom_Slide_indicatorInput, IndicatorUpdateWithoutFrom_Slide_indicatorInput>
  }

  export type GeographyUpdateOneWithoutFrom_Slide_geographyInput = {
    create?: XOR<GeographyUncheckedCreateWithoutFrom_Slide_geographyInput, GeographyCreateWithoutFrom_Slide_geographyInput>
    connectOrCreate?: GeographyCreateOrConnectWithoutfrom_Slide_geographyInput
    upsert?: GeographyUpsertWithoutFrom_Slide_geographyInput
    connect?: GeographyWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<GeographyUncheckedUpdateWithoutFrom_Slide_geographyInput, GeographyUpdateWithoutFrom_Slide_geographyInput>
  }

  export type ImageUpdateOneWithoutSlideInput = {
    create?: XOR<ImageUncheckedCreateWithoutSlideInput, ImageCreateWithoutSlideInput>
    connectOrCreate?: ImageCreateOrConnectWithoutslideInput
    upsert?: ImageUpsertWithoutSlideInput
    connect?: ImageWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ImageUncheckedUpdateWithoutSlideInput, ImageUpdateWithoutSlideInput>
  }

  export type ProjectUpdateOneWithoutSlidesInput = {
    create?: XOR<ProjectUncheckedCreateWithoutSlidesInput, ProjectCreateWithoutSlidesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutslidesInput
    upsert?: ProjectUpsertWithoutSlidesInput
    connect?: ProjectWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ProjectUncheckedUpdateWithoutSlidesInput, ProjectUpdateWithoutSlidesInput>
  }

  export type AnnotationUpdateManyWithoutSlideInput = {
    create?: XOR<Enumerable<AnnotationUncheckedCreateWithoutSlideInput>, Enumerable<AnnotationCreateWithoutSlideInput>>
    connectOrCreate?: Enumerable<AnnotationCreateOrConnectWithoutslideInput>
    upsert?: Enumerable<AnnotationUpsertWithWhereUniqueWithoutSlideInput>
    connect?: Enumerable<AnnotationWhereUniqueInput>
    set?: Enumerable<AnnotationWhereUniqueInput>
    disconnect?: Enumerable<AnnotationWhereUniqueInput>
    delete?: Enumerable<AnnotationWhereUniqueInput>
    update?: Enumerable<AnnotationUpdateWithWhereUniqueWithoutSlideInput>
    updateMany?: Enumerable<AnnotationUpdateManyWithWhereWithoutSlideInput>
    deleteMany?: Enumerable<AnnotationScalarWhereInput>
  }

  export type ImageUncheckedUpdateOneWithoutSlideInput = {
    create?: XOR<ImageUncheckedCreateWithoutSlideInput, ImageCreateWithoutSlideInput>
    connectOrCreate?: ImageCreateOrConnectWithoutslideInput
    upsert?: ImageUpsertWithoutSlideInput
    connect?: ImageWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ImageUncheckedUpdateWithoutSlideInput, ImageUpdateWithoutSlideInput>
  }

  export type AnnotationUncheckedUpdateManyWithoutSlideInput = {
    create?: XOR<Enumerable<AnnotationUncheckedCreateWithoutSlideInput>, Enumerable<AnnotationCreateWithoutSlideInput>>
    connectOrCreate?: Enumerable<AnnotationCreateOrConnectWithoutslideInput>
    upsert?: Enumerable<AnnotationUpsertWithWhereUniqueWithoutSlideInput>
    connect?: Enumerable<AnnotationWhereUniqueInput>
    set?: Enumerable<AnnotationWhereUniqueInput>
    disconnect?: Enumerable<AnnotationWhereUniqueInput>
    delete?: Enumerable<AnnotationWhereUniqueInput>
    update?: Enumerable<AnnotationUpdateWithWhereUniqueWithoutSlideInput>
    updateMany?: Enumerable<AnnotationUpdateManyWithWhereWithoutSlideInput>
    deleteMany?: Enumerable<AnnotationScalarWhereInput>
  }

  export type SlideCreateNestedOneWithoutImageInput = {
    create?: XOR<SlideUncheckedCreateWithoutImageInput, SlideCreateWithoutImageInput>
    connectOrCreate?: SlideCreateOrConnectWithoutimageInput
    connect?: SlideWhereUniqueInput
  }

  export type SlideUpdateOneWithoutImageInput = {
    create?: XOR<SlideUncheckedCreateWithoutImageInput, SlideCreateWithoutImageInput>
    connectOrCreate?: SlideCreateOrConnectWithoutimageInput
    upsert?: SlideUpsertWithoutImageInput
    connect?: SlideWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<SlideUncheckedUpdateWithoutImageInput, SlideUpdateWithoutImageInput>
  }

  export type TagCreateNestedManyWithoutFrom_Project_tagsInput = {
    create?: XOR<Enumerable<TagUncheckedCreateWithoutFrom_Project_tagsInput>, Enumerable<TagCreateWithoutFrom_Project_tagsInput>>
    connectOrCreate?: Enumerable<TagCreateOrConnectWithoutfrom_Project_tagsInput>
    connect?: Enumerable<TagWhereUniqueInput>
  }

  export type SlideCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<SlideUncheckedCreateWithoutProjectInput>, Enumerable<SlideCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<SlideCreateOrConnectWithoutprojectInput>
    connect?: Enumerable<SlideWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserUncheckedCreateWithoutProjectsInput, UserCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutprojectsInput
    connect?: UserWhereUniqueInput
  }

  export type SlideUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<SlideUncheckedCreateWithoutProjectInput>, Enumerable<SlideCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<SlideCreateOrConnectWithoutprojectInput>
    connect?: Enumerable<SlideWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TagUpdateManyWithoutFrom_Project_tagsInput = {
    create?: XOR<Enumerable<TagUncheckedCreateWithoutFrom_Project_tagsInput>, Enumerable<TagCreateWithoutFrom_Project_tagsInput>>
    connectOrCreate?: Enumerable<TagCreateOrConnectWithoutfrom_Project_tagsInput>
    upsert?: Enumerable<TagUpsertWithWhereUniqueWithoutFrom_Project_tagsInput>
    connect?: Enumerable<TagWhereUniqueInput>
    set?: Enumerable<TagWhereUniqueInput>
    disconnect?: Enumerable<TagWhereUniqueInput>
    delete?: Enumerable<TagWhereUniqueInput>
    update?: Enumerable<TagUpdateWithWhereUniqueWithoutFrom_Project_tagsInput>
    updateMany?: Enumerable<TagUpdateManyWithWhereWithoutFrom_Project_tagsInput>
    deleteMany?: Enumerable<TagScalarWhereInput>
  }

  export type SlideUpdateManyWithoutProjectInput = {
    create?: XOR<Enumerable<SlideUncheckedCreateWithoutProjectInput>, Enumerable<SlideCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<SlideCreateOrConnectWithoutprojectInput>
    upsert?: Enumerable<SlideUpsertWithWhereUniqueWithoutProjectInput>
    connect?: Enumerable<SlideWhereUniqueInput>
    set?: Enumerable<SlideWhereUniqueInput>
    disconnect?: Enumerable<SlideWhereUniqueInput>
    delete?: Enumerable<SlideWhereUniqueInput>
    update?: Enumerable<SlideUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<SlideUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<SlideScalarWhereInput>
  }

  export type UserUpdateOneWithoutProjectsInput = {
    create?: XOR<UserUncheckedCreateWithoutProjectsInput, UserCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutprojectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<UserUncheckedUpdateWithoutProjectsInput, UserUpdateWithoutProjectsInput>
  }

  export type SlideUncheckedUpdateManyWithoutProjectInput = {
    create?: XOR<Enumerable<SlideUncheckedCreateWithoutProjectInput>, Enumerable<SlideCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<SlideCreateOrConnectWithoutprojectInput>
    upsert?: Enumerable<SlideUpsertWithWhereUniqueWithoutProjectInput>
    connect?: Enumerable<SlideWhereUniqueInput>
    set?: Enumerable<SlideWhereUniqueInput>
    disconnect?: Enumerable<SlideWhereUniqueInput>
    delete?: Enumerable<SlideWhereUniqueInput>
    update?: Enumerable<SlideUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<SlideUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<SlideScalarWhereInput>
  }

  export type ProjectCreateNestedManyWithoutTagsInput = {
    create?: XOR<Enumerable<ProjectUncheckedCreateWithoutTagsInput>, Enumerable<ProjectCreateWithoutTagsInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithouttagsInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type ProjectUpdateManyWithoutTagsInput = {
    create?: XOR<Enumerable<ProjectUncheckedCreateWithoutTagsInput>, Enumerable<ProjectCreateWithoutTagsInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithouttagsInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutTagsInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutTagsInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutTagsInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type IndicatorCreateNestedManyWithoutGeographiesInput = {
    create?: XOR<Enumerable<IndicatorUncheckedCreateWithoutGeographiesInput>, Enumerable<IndicatorCreateWithoutGeographiesInput>>
    connectOrCreate?: Enumerable<IndicatorCreateOrConnectWithoutgeographiesInput>
    connect?: Enumerable<IndicatorWhereUniqueInput>
  }

  export type SlideCreateNestedManyWithoutGeographyInput = {
    create?: XOR<Enumerable<SlideUncheckedCreateWithoutGeographyInput>, Enumerable<SlideCreateWithoutGeographyInput>>
    connectOrCreate?: Enumerable<SlideCreateOrConnectWithoutgeographyInput>
    connect?: Enumerable<SlideWhereUniqueInput>
  }

  export type SlideUncheckedCreateNestedManyWithoutGeographyInput = {
    create?: XOR<Enumerable<SlideUncheckedCreateWithoutGeographyInput>, Enumerable<SlideCreateWithoutGeographyInput>>
    connectOrCreate?: Enumerable<SlideCreateOrConnectWithoutgeographyInput>
    connect?: Enumerable<SlideWhereUniqueInput>
  }

  export type IndicatorUpdateManyWithoutGeographiesInput = {
    create?: XOR<Enumerable<IndicatorUncheckedCreateWithoutGeographiesInput>, Enumerable<IndicatorCreateWithoutGeographiesInput>>
    connectOrCreate?: Enumerable<IndicatorCreateOrConnectWithoutgeographiesInput>
    upsert?: Enumerable<IndicatorUpsertWithWhereUniqueWithoutGeographiesInput>
    connect?: Enumerable<IndicatorWhereUniqueInput>
    set?: Enumerable<IndicatorWhereUniqueInput>
    disconnect?: Enumerable<IndicatorWhereUniqueInput>
    delete?: Enumerable<IndicatorWhereUniqueInput>
    update?: Enumerable<IndicatorUpdateWithWhereUniqueWithoutGeographiesInput>
    updateMany?: Enumerable<IndicatorUpdateManyWithWhereWithoutGeographiesInput>
    deleteMany?: Enumerable<IndicatorScalarWhereInput>
  }

  export type SlideUpdateManyWithoutGeographyInput = {
    create?: XOR<Enumerable<SlideUncheckedCreateWithoutGeographyInput>, Enumerable<SlideCreateWithoutGeographyInput>>
    connectOrCreate?: Enumerable<SlideCreateOrConnectWithoutgeographyInput>
    upsert?: Enumerable<SlideUpsertWithWhereUniqueWithoutGeographyInput>
    connect?: Enumerable<SlideWhereUniqueInput>
    set?: Enumerable<SlideWhereUniqueInput>
    disconnect?: Enumerable<SlideWhereUniqueInput>
    delete?: Enumerable<SlideWhereUniqueInput>
    update?: Enumerable<SlideUpdateWithWhereUniqueWithoutGeographyInput>
    updateMany?: Enumerable<SlideUpdateManyWithWhereWithoutGeographyInput>
    deleteMany?: Enumerable<SlideScalarWhereInput>
  }

  export type SlideUncheckedUpdateManyWithoutGeographyInput = {
    create?: XOR<Enumerable<SlideUncheckedCreateWithoutGeographyInput>, Enumerable<SlideCreateWithoutGeographyInput>>
    connectOrCreate?: Enumerable<SlideCreateOrConnectWithoutgeographyInput>
    upsert?: Enumerable<SlideUpsertWithWhereUniqueWithoutGeographyInput>
    connect?: Enumerable<SlideWhereUniqueInput>
    set?: Enumerable<SlideWhereUniqueInput>
    disconnect?: Enumerable<SlideWhereUniqueInput>
    delete?: Enumerable<SlideWhereUniqueInput>
    update?: Enumerable<SlideUpdateWithWhereUniqueWithoutGeographyInput>
    updateMany?: Enumerable<SlideUpdateManyWithWhereWithoutGeographyInput>
    deleteMany?: Enumerable<SlideScalarWhereInput>
  }

  export type GeographyCreateNestedManyWithoutFrom_Indicator_geographiesInput = {
    create?: XOR<Enumerable<GeographyUncheckedCreateWithoutFrom_Indicator_geographiesInput>, Enumerable<GeographyCreateWithoutFrom_Indicator_geographiesInput>>
    connectOrCreate?: Enumerable<GeographyCreateOrConnectWithoutfrom_Indicator_geographiesInput>
    connect?: Enumerable<GeographyWhereUniqueInput>
  }

  export type SlideCreateNestedManyWithoutIndicatorInput = {
    create?: XOR<Enumerable<SlideUncheckedCreateWithoutIndicatorInput>, Enumerable<SlideCreateWithoutIndicatorInput>>
    connectOrCreate?: Enumerable<SlideCreateOrConnectWithoutindicatorInput>
    connect?: Enumerable<SlideWhereUniqueInput>
  }

  export type SlideUncheckedCreateNestedManyWithoutIndicatorInput = {
    create?: XOR<Enumerable<SlideUncheckedCreateWithoutIndicatorInput>, Enumerable<SlideCreateWithoutIndicatorInput>>
    connectOrCreate?: Enumerable<SlideCreateOrConnectWithoutindicatorInput>
    connect?: Enumerable<SlideWhereUniqueInput>
  }

  export type GeographyUpdateManyWithoutFrom_Indicator_geographiesInput = {
    create?: XOR<Enumerable<GeographyUncheckedCreateWithoutFrom_Indicator_geographiesInput>, Enumerable<GeographyCreateWithoutFrom_Indicator_geographiesInput>>
    connectOrCreate?: Enumerable<GeographyCreateOrConnectWithoutfrom_Indicator_geographiesInput>
    upsert?: Enumerable<GeographyUpsertWithWhereUniqueWithoutFrom_Indicator_geographiesInput>
    connect?: Enumerable<GeographyWhereUniqueInput>
    set?: Enumerable<GeographyWhereUniqueInput>
    disconnect?: Enumerable<GeographyWhereUniqueInput>
    delete?: Enumerable<GeographyWhereUniqueInput>
    update?: Enumerable<GeographyUpdateWithWhereUniqueWithoutFrom_Indicator_geographiesInput>
    updateMany?: Enumerable<GeographyUpdateManyWithWhereWithoutFrom_Indicator_geographiesInput>
    deleteMany?: Enumerable<GeographyScalarWhereInput>
  }

  export type SlideUpdateManyWithoutIndicatorInput = {
    create?: XOR<Enumerable<SlideUncheckedCreateWithoutIndicatorInput>, Enumerable<SlideCreateWithoutIndicatorInput>>
    connectOrCreate?: Enumerable<SlideCreateOrConnectWithoutindicatorInput>
    upsert?: Enumerable<SlideUpsertWithWhereUniqueWithoutIndicatorInput>
    connect?: Enumerable<SlideWhereUniqueInput>
    set?: Enumerable<SlideWhereUniqueInput>
    disconnect?: Enumerable<SlideWhereUniqueInput>
    delete?: Enumerable<SlideWhereUniqueInput>
    update?: Enumerable<SlideUpdateWithWhereUniqueWithoutIndicatorInput>
    updateMany?: Enumerable<SlideUpdateManyWithWhereWithoutIndicatorInput>
    deleteMany?: Enumerable<SlideScalarWhereInput>
  }

  export type SlideUncheckedUpdateManyWithoutIndicatorInput = {
    create?: XOR<Enumerable<SlideUncheckedCreateWithoutIndicatorInput>, Enumerable<SlideCreateWithoutIndicatorInput>>
    connectOrCreate?: Enumerable<SlideCreateOrConnectWithoutindicatorInput>
    upsert?: Enumerable<SlideUpsertWithWhereUniqueWithoutIndicatorInput>
    connect?: Enumerable<SlideWhereUniqueInput>
    set?: Enumerable<SlideWhereUniqueInput>
    disconnect?: Enumerable<SlideWhereUniqueInput>
    delete?: Enumerable<SlideWhereUniqueInput>
    update?: Enumerable<SlideUpdateWithWhereUniqueWithoutIndicatorInput>
    updateMany?: Enumerable<SlideUpdateManyWithWhereWithoutIndicatorInput>
    deleteMany?: Enumerable<SlideScalarWhereInput>
  }

  export type SlideCreateNestedOneWithoutAnnotationsInput = {
    create?: XOR<SlideUncheckedCreateWithoutAnnotationsInput, SlideCreateWithoutAnnotationsInput>
    connectOrCreate?: SlideCreateOrConnectWithoutannotationsInput
    connect?: SlideWhereUniqueInput
  }

  export type SlideUpdateOneWithoutAnnotationsInput = {
    create?: XOR<SlideUncheckedCreateWithoutAnnotationsInput, SlideCreateWithoutAnnotationsInput>
    connectOrCreate?: SlideCreateOrConnectWithoutannotationsInput
    upsert?: SlideUpsertWithoutAnnotationsInput
    connect?: SlideWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<SlideUncheckedUpdateWithoutAnnotationsInput, SlideUpdateWithoutAnnotationsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type ProjectCreateWithoutUserInput = {
    title?: string | null
    description?: string | null
    category?: string | null
    imageTitle?: string | null
    source?: string | null
    url?: string | null
    published?: boolean | null
    gallery?: boolean | null
    updatedAt_utc?: Date | string | null
    updatedAt_offset?: string | null
    createdAt_utc?: Date | string | null
    createdAt_offset?: string | null
    tags?: TagCreateNestedManyWithoutFrom_Project_tagsInput
    slides?: SlideCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: number
    title?: string | null
    description?: string | null
    category?: string | null
    imageTitle?: string | null
    source?: string | null
    url?: string | null
    published?: boolean | null
    gallery?: boolean | null
    updatedAt_utc?: Date | string | null
    updatedAt_offset?: string | null
    createdAt_utc?: Date | string | null
    createdAt_offset?: string | null
    slides?: SlideUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutuserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectUncheckedCreateWithoutUserInput, ProjectCreateWithoutUserInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUncheckedUpdateWithoutUserInput, ProjectUpdateWithoutUserInput>
    create: XOR<ProjectUncheckedCreateWithoutUserInput, ProjectCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUncheckedUpdateWithoutUserInput, ProjectUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUncheckedUpdateManyWithoutProjectsInput, ProjectUpdateManyMutationInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: Enumerable<ProjectScalarWhereInput>
    OR?: Enumerable<ProjectScalarWhereInput>
    NOT?: Enumerable<ProjectScalarWhereInput>
    id?: IntFilter | number
    title?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    category?: StringNullableFilter | string | null
    imageTitle?: StringNullableFilter | string | null
    source?: StringNullableFilter | string | null
    url?: StringNullableFilter | string | null
    published?: BoolNullableFilter | boolean | null
    gallery?: BoolNullableFilter | boolean | null
    updatedAt_utc?: DateTimeNullableFilter | Date | string | null
    updatedAt_offset?: StringNullableFilter | string | null
    createdAt_utc?: DateTimeNullableFilter | Date | string | null
    createdAt_offset?: StringNullableFilter | string | null
    userId?: IntNullableFilter | number | null
  }

  export type IndicatorCreateWithoutFrom_Slide_indicatorInput = {
    varname?: string | null
    title?: string | null
    domain?: string | null
    year?: number | null
    source?: string | null
    url?: string | null
    geographies?: GeographyCreateNestedManyWithoutFrom_Indicator_geographiesInput
  }

  export type IndicatorUncheckedCreateWithoutFrom_Slide_indicatorInput = {
    id?: number
    varname?: string | null
    title?: string | null
    domain?: string | null
    year?: number | null
    source?: string | null
    url?: string | null
  }

  export type IndicatorCreateOrConnectWithoutfrom_Slide_indicatorInput = {
    where: IndicatorWhereUniqueInput
    create: XOR<IndicatorUncheckedCreateWithoutFrom_Slide_indicatorInput, IndicatorCreateWithoutFrom_Slide_indicatorInput>
  }

  export type GeographyCreateWithoutFrom_Slide_geographyInput = {
    layer?: string | null
    title?: string | null
    ordering?: number | null
    from_Indicator_geographies?: IndicatorCreateNestedManyWithoutGeographiesInput
  }

  export type GeographyUncheckedCreateWithoutFrom_Slide_geographyInput = {
    id?: number
    layer?: string | null
    title?: string | null
    ordering?: number | null
  }

  export type GeographyCreateOrConnectWithoutfrom_Slide_geographyInput = {
    where: GeographyWhereUniqueInput
    create: XOR<GeographyUncheckedCreateWithoutFrom_Slide_geographyInput, GeographyCreateWithoutFrom_Slide_geographyInput>
  }

  export type ImageCreateWithoutSlideInput = {
    title?: string | null
    creator?: string | null
    source?: string | null
    date?: string | null
    url?: string | null
  }

  export type ImageUncheckedCreateWithoutSlideInput = {
    id?: number
    title?: string | null
    creator?: string | null
    source?: string | null
    date?: string | null
    url?: string | null
  }

  export type ImageCreateOrConnectWithoutslideInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageUncheckedCreateWithoutSlideInput, ImageCreateWithoutSlideInput>
  }

  export type ProjectCreateWithoutSlidesInput = {
    title?: string | null
    description?: string | null
    category?: string | null
    imageTitle?: string | null
    source?: string | null
    url?: string | null
    published?: boolean | null
    gallery?: boolean | null
    updatedAt_utc?: Date | string | null
    updatedAt_offset?: string | null
    createdAt_utc?: Date | string | null
    createdAt_offset?: string | null
    tags?: TagCreateNestedManyWithoutFrom_Project_tagsInput
    user?: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutSlidesInput = {
    id?: number
    title?: string | null
    description?: string | null
    category?: string | null
    imageTitle?: string | null
    source?: string | null
    url?: string | null
    published?: boolean | null
    gallery?: boolean | null
    updatedAt_utc?: Date | string | null
    updatedAt_offset?: string | null
    createdAt_utc?: Date | string | null
    createdAt_offset?: string | null
    userId?: number | null
  }

  export type ProjectCreateOrConnectWithoutslidesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectUncheckedCreateWithoutSlidesInput, ProjectCreateWithoutSlidesInput>
  }

  export type AnnotationCreateWithoutSlideInput = {
    feature?: string | null
  }

  export type AnnotationUncheckedCreateWithoutSlideInput = {
    id?: number
    feature?: string | null
  }

  export type AnnotationCreateOrConnectWithoutslideInput = {
    where: AnnotationWhereUniqueInput
    create: XOR<AnnotationUncheckedCreateWithoutSlideInput, AnnotationCreateWithoutSlideInput>
  }

  export type IndicatorUpsertWithoutFrom_Slide_indicatorInput = {
    update: XOR<IndicatorUncheckedUpdateWithoutFrom_Slide_indicatorInput, IndicatorUpdateWithoutFrom_Slide_indicatorInput>
    create: XOR<IndicatorUncheckedCreateWithoutFrom_Slide_indicatorInput, IndicatorCreateWithoutFrom_Slide_indicatorInput>
  }

  export type IndicatorUpdateWithoutFrom_Slide_indicatorInput = {
    varname?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    geographies?: GeographyUpdateManyWithoutFrom_Indicator_geographiesInput
  }

  export type IndicatorUncheckedUpdateWithoutFrom_Slide_indicatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    varname?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeographyUpsertWithoutFrom_Slide_geographyInput = {
    update: XOR<GeographyUncheckedUpdateWithoutFrom_Slide_geographyInput, GeographyUpdateWithoutFrom_Slide_geographyInput>
    create: XOR<GeographyUncheckedCreateWithoutFrom_Slide_geographyInput, GeographyCreateWithoutFrom_Slide_geographyInput>
  }

  export type GeographyUpdateWithoutFrom_Slide_geographyInput = {
    layer?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    ordering?: NullableIntFieldUpdateOperationsInput | number | null
    from_Indicator_geographies?: IndicatorUpdateManyWithoutGeographiesInput
  }

  export type GeographyUncheckedUpdateWithoutFrom_Slide_geographyInput = {
    id?: IntFieldUpdateOperationsInput | number
    layer?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    ordering?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImageUpsertWithoutSlideInput = {
    update: XOR<ImageUncheckedUpdateWithoutSlideInput, ImageUpdateWithoutSlideInput>
    create: XOR<ImageUncheckedCreateWithoutSlideInput, ImageCreateWithoutSlideInput>
  }

  export type ImageUpdateWithoutSlideInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateWithoutSlideInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUpsertWithoutSlidesInput = {
    update: XOR<ProjectUncheckedUpdateWithoutSlidesInput, ProjectUpdateWithoutSlidesInput>
    create: XOR<ProjectUncheckedCreateWithoutSlidesInput, ProjectCreateWithoutSlidesInput>
  }

  export type ProjectUpdateWithoutSlidesInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gallery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TagUpdateManyWithoutFrom_Project_tagsInput
    user?: UserUpdateOneWithoutProjectsInput
  }

  export type ProjectUncheckedUpdateWithoutSlidesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gallery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AnnotationUpsertWithWhereUniqueWithoutSlideInput = {
    where: AnnotationWhereUniqueInput
    update: XOR<AnnotationUncheckedUpdateWithoutSlideInput, AnnotationUpdateWithoutSlideInput>
    create: XOR<AnnotationUncheckedCreateWithoutSlideInput, AnnotationCreateWithoutSlideInput>
  }

  export type AnnotationUpdateWithWhereUniqueWithoutSlideInput = {
    where: AnnotationWhereUniqueInput
    data: XOR<AnnotationUncheckedUpdateWithoutSlideInput, AnnotationUpdateWithoutSlideInput>
  }

  export type AnnotationUpdateManyWithWhereWithoutSlideInput = {
    where: AnnotationScalarWhereInput
    data: XOR<AnnotationUncheckedUpdateManyWithoutAnnotationsInput, AnnotationUpdateManyMutationInput>
  }

  export type AnnotationScalarWhereInput = {
    AND?: Enumerable<AnnotationScalarWhereInput>
    OR?: Enumerable<AnnotationScalarWhereInput>
    NOT?: Enumerable<AnnotationScalarWhereInput>
    id?: IntFilter | number
    feature?: StringNullableFilter | string | null
    slideId?: IntNullableFilter | number | null
  }

  export type SlideCreateWithoutImageInput = {
    title?: string | null
    description?: string | null
    order?: number | null
    size?: string | null
    longitude?: number | null
    latitude?: number | null
    zoom?: number | null
    bearing?: number | null
    pitch?: number | null
    selectedFeature?: string | null
    media?: string | null
    imageTitle?: string | null
    source?: string | null
    url?: string | null
    indicator?: IndicatorCreateNestedOneWithoutFrom_Slide_indicatorInput
    geography?: GeographyCreateNestedOneWithoutFrom_Slide_geographyInput
    project?: ProjectCreateNestedOneWithoutSlidesInput
    annotations?: AnnotationCreateNestedManyWithoutSlideInput
  }

  export type SlideUncheckedCreateWithoutImageInput = {
    id?: number
    title?: string | null
    description?: string | null
    order?: number | null
    size?: string | null
    longitude?: number | null
    latitude?: number | null
    zoom?: number | null
    bearing?: number | null
    pitch?: number | null
    selectedFeature?: string | null
    media?: string | null
    imageTitle?: string | null
    source?: string | null
    url?: string | null
    indicatorId?: number | null
    geographyId?: number | null
    projectId?: number | null
    annotations?: AnnotationUncheckedCreateNestedManyWithoutSlideInput
  }

  export type SlideCreateOrConnectWithoutimageInput = {
    where: SlideWhereUniqueInput
    create: XOR<SlideUncheckedCreateWithoutImageInput, SlideCreateWithoutImageInput>
  }

  export type SlideUpsertWithoutImageInput = {
    update: XOR<SlideUncheckedUpdateWithoutImageInput, SlideUpdateWithoutImageInput>
    create: XOR<SlideUncheckedCreateWithoutImageInput, SlideCreateWithoutImageInput>
  }

  export type SlideUpdateWithoutImageInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    pitch?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedFeature?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    indicator?: IndicatorUpdateOneWithoutFrom_Slide_indicatorInput
    geography?: GeographyUpdateOneWithoutFrom_Slide_geographyInput
    project?: ProjectUpdateOneWithoutSlidesInput
    annotations?: AnnotationUpdateManyWithoutSlideInput
  }

  export type SlideUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    pitch?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedFeature?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    indicatorId?: NullableIntFieldUpdateOperationsInput | number | null
    geographyId?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    annotations?: AnnotationUncheckedUpdateManyWithoutSlideInput
  }

  export type TagCreateWithoutFrom_Project_tagsInput = {
    name?: string | null
  }

  export type TagUncheckedCreateWithoutFrom_Project_tagsInput = {
    id?: number
    name?: string | null
  }

  export type TagCreateOrConnectWithoutfrom_Project_tagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagUncheckedCreateWithoutFrom_Project_tagsInput, TagCreateWithoutFrom_Project_tagsInput>
  }

  export type SlideCreateWithoutProjectInput = {
    title?: string | null
    description?: string | null
    order?: number | null
    size?: string | null
    longitude?: number | null
    latitude?: number | null
    zoom?: number | null
    bearing?: number | null
    pitch?: number | null
    selectedFeature?: string | null
    media?: string | null
    imageTitle?: string | null
    source?: string | null
    url?: string | null
    indicator?: IndicatorCreateNestedOneWithoutFrom_Slide_indicatorInput
    geography?: GeographyCreateNestedOneWithoutFrom_Slide_geographyInput
    image?: ImageCreateNestedOneWithoutSlideInput
    annotations?: AnnotationCreateNestedManyWithoutSlideInput
  }

  export type SlideUncheckedCreateWithoutProjectInput = {
    id?: number
    title?: string | null
    description?: string | null
    order?: number | null
    size?: string | null
    longitude?: number | null
    latitude?: number | null
    zoom?: number | null
    bearing?: number | null
    pitch?: number | null
    selectedFeature?: string | null
    media?: string | null
    imageTitle?: string | null
    source?: string | null
    url?: string | null
    indicatorId?: number | null
    geographyId?: number | null
    image?: ImageUncheckedCreateNestedOneWithoutSlideInput
    annotations?: AnnotationUncheckedCreateNestedManyWithoutSlideInput
  }

  export type SlideCreateOrConnectWithoutprojectInput = {
    where: SlideWhereUniqueInput
    create: XOR<SlideUncheckedCreateWithoutProjectInput, SlideCreateWithoutProjectInput>
  }

  export type UserCreateWithoutProjectsInput = {
    name?: string | null
    email?: string | null
    institution?: string | null
    language?: string | null
    verified?: boolean | null
    verifyId?: string | null
    resetId?: string | null
    isAdmin?: boolean | null
    password?: string | null
    termsAccepted?: boolean | null
    privacyAccepted?: boolean | null
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: number
    name?: string | null
    email?: string | null
    institution?: string | null
    language?: string | null
    verified?: boolean | null
    verifyId?: string | null
    resetId?: string | null
    isAdmin?: boolean | null
    password?: string | null
    termsAccepted?: boolean | null
    privacyAccepted?: boolean | null
  }

  export type UserCreateOrConnectWithoutprojectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserUncheckedCreateWithoutProjectsInput, UserCreateWithoutProjectsInput>
  }

  export type TagUpsertWithWhereUniqueWithoutFrom_Project_tagsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUncheckedUpdateWithoutFrom_Project_tagsInput, TagUpdateWithoutFrom_Project_tagsInput>
    create: XOR<TagUncheckedCreateWithoutFrom_Project_tagsInput, TagCreateWithoutFrom_Project_tagsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutFrom_Project_tagsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUncheckedUpdateWithoutFrom_Project_tagsInput, TagUpdateWithoutFrom_Project_tagsInput>
  }

  export type TagUpdateManyWithWhereWithoutFrom_Project_tagsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUncheckedUpdateManyWithoutTagsInput, TagUpdateManyMutationInput>
  }

  export type TagScalarWhereInput = {
    AND?: Enumerable<TagScalarWhereInput>
    OR?: Enumerable<TagScalarWhereInput>
    NOT?: Enumerable<TagScalarWhereInput>
    id?: IntFilter | number
    name?: StringNullableFilter | string | null
  }

  export type SlideUpsertWithWhereUniqueWithoutProjectInput = {
    where: SlideWhereUniqueInput
    update: XOR<SlideUncheckedUpdateWithoutProjectInput, SlideUpdateWithoutProjectInput>
    create: XOR<SlideUncheckedCreateWithoutProjectInput, SlideCreateWithoutProjectInput>
  }

  export type SlideUpdateWithWhereUniqueWithoutProjectInput = {
    where: SlideWhereUniqueInput
    data: XOR<SlideUncheckedUpdateWithoutProjectInput, SlideUpdateWithoutProjectInput>
  }

  export type SlideUpdateManyWithWhereWithoutProjectInput = {
    where: SlideScalarWhereInput
    data: XOR<SlideUncheckedUpdateManyWithoutSlidesInput, SlideUpdateManyMutationInput>
  }

  export type SlideScalarWhereInput = {
    AND?: Enumerable<SlideScalarWhereInput>
    OR?: Enumerable<SlideScalarWhereInput>
    NOT?: Enumerable<SlideScalarWhereInput>
    id?: IntFilter | number
    title?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    order?: IntNullableFilter | number | null
    size?: StringNullableFilter | string | null
    longitude?: FloatNullableFilter | number | null
    latitude?: FloatNullableFilter | number | null
    zoom?: FloatNullableFilter | number | null
    bearing?: FloatNullableFilter | number | null
    pitch?: FloatNullableFilter | number | null
    selectedFeature?: StringNullableFilter | string | null
    media?: StringNullableFilter | string | null
    imageTitle?: StringNullableFilter | string | null
    source?: StringNullableFilter | string | null
    url?: StringNullableFilter | string | null
    indicatorId?: IntNullableFilter | number | null
    geographyId?: IntNullableFilter | number | null
    projectId?: IntNullableFilter | number | null
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUncheckedUpdateWithoutProjectsInput, UserUpdateWithoutProjectsInput>
    create: XOR<UserUncheckedCreateWithoutProjectsInput, UserCreateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifyId?: NullableStringFieldUpdateOperationsInput | string | null
    resetId?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    termsAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    privacyAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifyId?: NullableStringFieldUpdateOperationsInput | string | null
    resetId?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    termsAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    privacyAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProjectCreateWithoutTagsInput = {
    title?: string | null
    description?: string | null
    category?: string | null
    imageTitle?: string | null
    source?: string | null
    url?: string | null
    published?: boolean | null
    gallery?: boolean | null
    updatedAt_utc?: Date | string | null
    updatedAt_offset?: string | null
    createdAt_utc?: Date | string | null
    createdAt_offset?: string | null
    slides?: SlideCreateNestedManyWithoutProjectInput
    user?: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutTagsInput = {
    id?: number
    title?: string | null
    description?: string | null
    category?: string | null
    imageTitle?: string | null
    source?: string | null
    url?: string | null
    published?: boolean | null
    gallery?: boolean | null
    updatedAt_utc?: Date | string | null
    updatedAt_offset?: string | null
    createdAt_utc?: Date | string | null
    createdAt_offset?: string | null
    userId?: number | null
    slides?: SlideUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithouttagsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectUncheckedCreateWithoutTagsInput, ProjectCreateWithoutTagsInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutTagsInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUncheckedUpdateWithoutTagsInput, ProjectUpdateWithoutTagsInput>
    create: XOR<ProjectUncheckedCreateWithoutTagsInput, ProjectCreateWithoutTagsInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutTagsInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUncheckedUpdateWithoutTagsInput, ProjectUpdateWithoutTagsInput>
  }

  export type ProjectUpdateManyWithWhereWithoutTagsInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUncheckedUpdateManyWithoutFrom_Project_tagsInput, ProjectUpdateManyMutationInput>
  }

  export type IndicatorCreateWithoutGeographiesInput = {
    varname?: string | null
    title?: string | null
    domain?: string | null
    year?: number | null
    source?: string | null
    url?: string | null
    from_Slide_indicator?: SlideCreateNestedManyWithoutIndicatorInput
  }

  export type IndicatorUncheckedCreateWithoutGeographiesInput = {
    id?: number
    varname?: string | null
    title?: string | null
    domain?: string | null
    year?: number | null
    source?: string | null
    url?: string | null
    from_Slide_indicator?: SlideUncheckedCreateNestedManyWithoutIndicatorInput
  }

  export type IndicatorCreateOrConnectWithoutgeographiesInput = {
    where: IndicatorWhereUniqueInput
    create: XOR<IndicatorUncheckedCreateWithoutGeographiesInput, IndicatorCreateWithoutGeographiesInput>
  }

  export type SlideCreateWithoutGeographyInput = {
    title?: string | null
    description?: string | null
    order?: number | null
    size?: string | null
    longitude?: number | null
    latitude?: number | null
    zoom?: number | null
    bearing?: number | null
    pitch?: number | null
    selectedFeature?: string | null
    media?: string | null
    imageTitle?: string | null
    source?: string | null
    url?: string | null
    indicator?: IndicatorCreateNestedOneWithoutFrom_Slide_indicatorInput
    image?: ImageCreateNestedOneWithoutSlideInput
    project?: ProjectCreateNestedOneWithoutSlidesInput
    annotations?: AnnotationCreateNestedManyWithoutSlideInput
  }

  export type SlideUncheckedCreateWithoutGeographyInput = {
    id?: number
    title?: string | null
    description?: string | null
    order?: number | null
    size?: string | null
    longitude?: number | null
    latitude?: number | null
    zoom?: number | null
    bearing?: number | null
    pitch?: number | null
    selectedFeature?: string | null
    media?: string | null
    imageTitle?: string | null
    source?: string | null
    url?: string | null
    indicatorId?: number | null
    projectId?: number | null
    image?: ImageUncheckedCreateNestedOneWithoutSlideInput
    annotations?: AnnotationUncheckedCreateNestedManyWithoutSlideInput
  }

  export type SlideCreateOrConnectWithoutgeographyInput = {
    where: SlideWhereUniqueInput
    create: XOR<SlideUncheckedCreateWithoutGeographyInput, SlideCreateWithoutGeographyInput>
  }

  export type IndicatorUpsertWithWhereUniqueWithoutGeographiesInput = {
    where: IndicatorWhereUniqueInput
    update: XOR<IndicatorUncheckedUpdateWithoutGeographiesInput, IndicatorUpdateWithoutGeographiesInput>
    create: XOR<IndicatorUncheckedCreateWithoutGeographiesInput, IndicatorCreateWithoutGeographiesInput>
  }

  export type IndicatorUpdateWithWhereUniqueWithoutGeographiesInput = {
    where: IndicatorWhereUniqueInput
    data: XOR<IndicatorUncheckedUpdateWithoutGeographiesInput, IndicatorUpdateWithoutGeographiesInput>
  }

  export type IndicatorUpdateManyWithWhereWithoutGeographiesInput = {
    where: IndicatorScalarWhereInput
    data: XOR<IndicatorUncheckedUpdateManyWithoutFrom_Indicator_geographiesInput, IndicatorUpdateManyMutationInput>
  }

  export type IndicatorScalarWhereInput = {
    AND?: Enumerable<IndicatorScalarWhereInput>
    OR?: Enumerable<IndicatorScalarWhereInput>
    NOT?: Enumerable<IndicatorScalarWhereInput>
    id?: IntFilter | number
    varname?: StringNullableFilter | string | null
    title?: StringNullableFilter | string | null
    domain?: StringNullableFilter | string | null
    year?: IntNullableFilter | number | null
    source?: StringNullableFilter | string | null
    url?: StringNullableFilter | string | null
  }

  export type SlideUpsertWithWhereUniqueWithoutGeographyInput = {
    where: SlideWhereUniqueInput
    update: XOR<SlideUncheckedUpdateWithoutGeographyInput, SlideUpdateWithoutGeographyInput>
    create: XOR<SlideUncheckedCreateWithoutGeographyInput, SlideCreateWithoutGeographyInput>
  }

  export type SlideUpdateWithWhereUniqueWithoutGeographyInput = {
    where: SlideWhereUniqueInput
    data: XOR<SlideUncheckedUpdateWithoutGeographyInput, SlideUpdateWithoutGeographyInput>
  }

  export type SlideUpdateManyWithWhereWithoutGeographyInput = {
    where: SlideScalarWhereInput
    data: XOR<SlideUncheckedUpdateManyWithoutFrom_Slide_geographyInput, SlideUpdateManyMutationInput>
  }

  export type GeographyCreateWithoutFrom_Indicator_geographiesInput = {
    layer?: string | null
    title?: string | null
    ordering?: number | null
    from_Slide_geography?: SlideCreateNestedManyWithoutGeographyInput
  }

  export type GeographyUncheckedCreateWithoutFrom_Indicator_geographiesInput = {
    id?: number
    layer?: string | null
    title?: string | null
    ordering?: number | null
    from_Slide_geography?: SlideUncheckedCreateNestedManyWithoutGeographyInput
  }

  export type GeographyCreateOrConnectWithoutfrom_Indicator_geographiesInput = {
    where: GeographyWhereUniqueInput
    create: XOR<GeographyUncheckedCreateWithoutFrom_Indicator_geographiesInput, GeographyCreateWithoutFrom_Indicator_geographiesInput>
  }

  export type SlideCreateWithoutIndicatorInput = {
    title?: string | null
    description?: string | null
    order?: number | null
    size?: string | null
    longitude?: number | null
    latitude?: number | null
    zoom?: number | null
    bearing?: number | null
    pitch?: number | null
    selectedFeature?: string | null
    media?: string | null
    imageTitle?: string | null
    source?: string | null
    url?: string | null
    geography?: GeographyCreateNestedOneWithoutFrom_Slide_geographyInput
    image?: ImageCreateNestedOneWithoutSlideInput
    project?: ProjectCreateNestedOneWithoutSlidesInput
    annotations?: AnnotationCreateNestedManyWithoutSlideInput
  }

  export type SlideUncheckedCreateWithoutIndicatorInput = {
    id?: number
    title?: string | null
    description?: string | null
    order?: number | null
    size?: string | null
    longitude?: number | null
    latitude?: number | null
    zoom?: number | null
    bearing?: number | null
    pitch?: number | null
    selectedFeature?: string | null
    media?: string | null
    imageTitle?: string | null
    source?: string | null
    url?: string | null
    geographyId?: number | null
    projectId?: number | null
    image?: ImageUncheckedCreateNestedOneWithoutSlideInput
    annotations?: AnnotationUncheckedCreateNestedManyWithoutSlideInput
  }

  export type SlideCreateOrConnectWithoutindicatorInput = {
    where: SlideWhereUniqueInput
    create: XOR<SlideUncheckedCreateWithoutIndicatorInput, SlideCreateWithoutIndicatorInput>
  }

  export type GeographyUpsertWithWhereUniqueWithoutFrom_Indicator_geographiesInput = {
    where: GeographyWhereUniqueInput
    update: XOR<GeographyUncheckedUpdateWithoutFrom_Indicator_geographiesInput, GeographyUpdateWithoutFrom_Indicator_geographiesInput>
    create: XOR<GeographyUncheckedCreateWithoutFrom_Indicator_geographiesInput, GeographyCreateWithoutFrom_Indicator_geographiesInput>
  }

  export type GeographyUpdateWithWhereUniqueWithoutFrom_Indicator_geographiesInput = {
    where: GeographyWhereUniqueInput
    data: XOR<GeographyUncheckedUpdateWithoutFrom_Indicator_geographiesInput, GeographyUpdateWithoutFrom_Indicator_geographiesInput>
  }

  export type GeographyUpdateManyWithWhereWithoutFrom_Indicator_geographiesInput = {
    where: GeographyScalarWhereInput
    data: XOR<GeographyUncheckedUpdateManyWithoutGeographiesInput, GeographyUpdateManyMutationInput>
  }

  export type GeographyScalarWhereInput = {
    AND?: Enumerable<GeographyScalarWhereInput>
    OR?: Enumerable<GeographyScalarWhereInput>
    NOT?: Enumerable<GeographyScalarWhereInput>
    id?: IntFilter | number
    layer?: StringNullableFilter | string | null
    title?: StringNullableFilter | string | null
    ordering?: IntNullableFilter | number | null
  }

  export type SlideUpsertWithWhereUniqueWithoutIndicatorInput = {
    where: SlideWhereUniqueInput
    update: XOR<SlideUncheckedUpdateWithoutIndicatorInput, SlideUpdateWithoutIndicatorInput>
    create: XOR<SlideUncheckedCreateWithoutIndicatorInput, SlideCreateWithoutIndicatorInput>
  }

  export type SlideUpdateWithWhereUniqueWithoutIndicatorInput = {
    where: SlideWhereUniqueInput
    data: XOR<SlideUncheckedUpdateWithoutIndicatorInput, SlideUpdateWithoutIndicatorInput>
  }

  export type SlideUpdateManyWithWhereWithoutIndicatorInput = {
    where: SlideScalarWhereInput
    data: XOR<SlideUncheckedUpdateManyWithoutFrom_Slide_indicatorInput, SlideUpdateManyMutationInput>
  }

  export type SlideCreateWithoutAnnotationsInput = {
    title?: string | null
    description?: string | null
    order?: number | null
    size?: string | null
    longitude?: number | null
    latitude?: number | null
    zoom?: number | null
    bearing?: number | null
    pitch?: number | null
    selectedFeature?: string | null
    media?: string | null
    imageTitle?: string | null
    source?: string | null
    url?: string | null
    indicator?: IndicatorCreateNestedOneWithoutFrom_Slide_indicatorInput
    geography?: GeographyCreateNestedOneWithoutFrom_Slide_geographyInput
    image?: ImageCreateNestedOneWithoutSlideInput
    project?: ProjectCreateNestedOneWithoutSlidesInput
  }

  export type SlideUncheckedCreateWithoutAnnotationsInput = {
    id?: number
    title?: string | null
    description?: string | null
    order?: number | null
    size?: string | null
    longitude?: number | null
    latitude?: number | null
    zoom?: number | null
    bearing?: number | null
    pitch?: number | null
    selectedFeature?: string | null
    media?: string | null
    imageTitle?: string | null
    source?: string | null
    url?: string | null
    indicatorId?: number | null
    geographyId?: number | null
    projectId?: number | null
    image?: ImageUncheckedCreateNestedOneWithoutSlideInput
  }

  export type SlideCreateOrConnectWithoutannotationsInput = {
    where: SlideWhereUniqueInput
    create: XOR<SlideUncheckedCreateWithoutAnnotationsInput, SlideCreateWithoutAnnotationsInput>
  }

  export type SlideUpsertWithoutAnnotationsInput = {
    update: XOR<SlideUncheckedUpdateWithoutAnnotationsInput, SlideUpdateWithoutAnnotationsInput>
    create: XOR<SlideUncheckedCreateWithoutAnnotationsInput, SlideCreateWithoutAnnotationsInput>
  }

  export type SlideUpdateWithoutAnnotationsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    pitch?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedFeature?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    indicator?: IndicatorUpdateOneWithoutFrom_Slide_indicatorInput
    geography?: GeographyUpdateOneWithoutFrom_Slide_geographyInput
    image?: ImageUpdateOneWithoutSlideInput
    project?: ProjectUpdateOneWithoutSlidesInput
  }

  export type SlideUncheckedUpdateWithoutAnnotationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    pitch?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedFeature?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    indicatorId?: NullableIntFieldUpdateOperationsInput | number | null
    geographyId?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    image?: ImageUncheckedUpdateOneWithoutSlideInput
  }

  export type ProjectUpdateWithoutUserInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gallery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TagUpdateManyWithoutFrom_Project_tagsInput
    slides?: SlideUpdateManyWithoutProjectInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gallery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    slides?: SlideUncheckedUpdateManyWithoutProjectInput
  }

  export type ProjectUncheckedUpdateManyWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gallery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnnotationUpdateWithoutSlideInput = {
    feature?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnnotationUncheckedUpdateWithoutSlideInput = {
    id?: IntFieldUpdateOperationsInput | number
    feature?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnnotationUncheckedUpdateManyWithoutAnnotationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    feature?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagUpdateWithoutFrom_Project_tagsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagUncheckedUpdateWithoutFrom_Project_tagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SlideUpdateWithoutProjectInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    pitch?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedFeature?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    indicator?: IndicatorUpdateOneWithoutFrom_Slide_indicatorInput
    geography?: GeographyUpdateOneWithoutFrom_Slide_geographyInput
    image?: ImageUpdateOneWithoutSlideInput
    annotations?: AnnotationUpdateManyWithoutSlideInput
  }

  export type SlideUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    pitch?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedFeature?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    indicatorId?: NullableIntFieldUpdateOperationsInput | number | null
    geographyId?: NullableIntFieldUpdateOperationsInput | number | null
    image?: ImageUncheckedUpdateOneWithoutSlideInput
    annotations?: AnnotationUncheckedUpdateManyWithoutSlideInput
  }

  export type SlideUncheckedUpdateManyWithoutSlidesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    pitch?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedFeature?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    indicatorId?: NullableIntFieldUpdateOperationsInput | number | null
    geographyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectUpdateWithoutTagsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gallery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    slides?: SlideUpdateManyWithoutProjectInput
    user?: UserUpdateOneWithoutProjectsInput
  }

  export type ProjectUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gallery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    slides?: SlideUncheckedUpdateManyWithoutProjectInput
  }

  export type ProjectUncheckedUpdateManyWithoutFrom_Project_tagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gallery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_utc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt_offset?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IndicatorUpdateWithoutGeographiesInput = {
    varname?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    from_Slide_indicator?: SlideUpdateManyWithoutIndicatorInput
  }

  export type IndicatorUncheckedUpdateWithoutGeographiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    varname?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    from_Slide_indicator?: SlideUncheckedUpdateManyWithoutIndicatorInput
  }

  export type IndicatorUncheckedUpdateManyWithoutFrom_Indicator_geographiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    varname?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SlideUpdateWithoutGeographyInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    pitch?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedFeature?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    indicator?: IndicatorUpdateOneWithoutFrom_Slide_indicatorInput
    image?: ImageUpdateOneWithoutSlideInput
    project?: ProjectUpdateOneWithoutSlidesInput
    annotations?: AnnotationUpdateManyWithoutSlideInput
  }

  export type SlideUncheckedUpdateWithoutGeographyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    pitch?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedFeature?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    indicatorId?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    image?: ImageUncheckedUpdateOneWithoutSlideInput
    annotations?: AnnotationUncheckedUpdateManyWithoutSlideInput
  }

  export type SlideUncheckedUpdateManyWithoutFrom_Slide_geographyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    pitch?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedFeature?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    indicatorId?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GeographyUpdateWithoutFrom_Indicator_geographiesInput = {
    layer?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    ordering?: NullableIntFieldUpdateOperationsInput | number | null
    from_Slide_geography?: SlideUpdateManyWithoutGeographyInput
  }

  export type GeographyUncheckedUpdateWithoutFrom_Indicator_geographiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    layer?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    ordering?: NullableIntFieldUpdateOperationsInput | number | null
    from_Slide_geography?: SlideUncheckedUpdateManyWithoutGeographyInput
  }

  export type GeographyUncheckedUpdateManyWithoutGeographiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    layer?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    ordering?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SlideUpdateWithoutIndicatorInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    pitch?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedFeature?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    geography?: GeographyUpdateOneWithoutFrom_Slide_geographyInput
    image?: ImageUpdateOneWithoutSlideInput
    project?: ProjectUpdateOneWithoutSlidesInput
    annotations?: AnnotationUpdateManyWithoutSlideInput
  }

  export type SlideUncheckedUpdateWithoutIndicatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    pitch?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedFeature?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    geographyId?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    image?: ImageUncheckedUpdateOneWithoutSlideInput
    annotations?: AnnotationUncheckedUpdateManyWithoutSlideInput
  }

  export type SlideUncheckedUpdateManyWithoutFrom_Slide_indicatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    zoom?: NullableFloatFieldUpdateOperationsInput | number | null
    bearing?: NullableFloatFieldUpdateOperationsInput | number | null
    pitch?: NullableFloatFieldUpdateOperationsInput | number | null
    selectedFeature?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    imageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    geographyId?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}