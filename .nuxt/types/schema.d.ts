import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `vuetify-nuxt-module`
     */
    ["vuetify"]: typeof import("vuetify-nuxt-module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/oem/proj/SBwD-Support-UI/home/index`
     */
    ["home"]: typeof import("/home/oem/proj/SBwD-Support-UI/home/index").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/oem/proj/SBwD-Support-UI/account/index`
     */
    ["account"]: typeof import("/home/oem/proj/SBwD-Support-UI/account/index").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/oem/proj/SBwD-Support-UI/kakaoAuthentication/index`
     */
    ["kakaoAuthentication"]: typeof import("/home/oem/proj/SBwD-Support-UI/kakaoAuthentication/index").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/oem/proj/SBwD-Support-UI/board/index`
     */
    ["board"]: typeof import("/home/oem/proj/SBwD-Support-UI/board/index").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `vuetify-nuxt-module`
     */
    ["vuetify"]?: typeof import("vuetify-nuxt-module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/oem/proj/SBwD-Support-UI/home/index`
     */
    ["home"]?: typeof import("/home/oem/proj/SBwD-Support-UI/home/index").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/oem/proj/SBwD-Support-UI/account/index`
     */
    ["account"]?: typeof import("/home/oem/proj/SBwD-Support-UI/account/index").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/oem/proj/SBwD-Support-UI/kakaoAuthentication/index`
     */
    ["kakaoAuthentication"]?: typeof import("/home/oem/proj/SBwD-Support-UI/kakaoAuthentication/index").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/oem/proj/SBwD-Support-UI/board/index`
     */
    ["board"]?: typeof import("/home/oem/proj/SBwD-Support-UI/board/index").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["vuetify-nuxt-module", Exclude<NuxtConfig["vuetify"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["~/home/index.ts", Exclude<NuxtConfig["home"], boolean>] | ["~/account/index.ts", Exclude<NuxtConfig["account"], boolean>] | ["~/kakaoAuthentication/index.ts", Exclude<NuxtConfig["kakaoAuthentication"], boolean>] | ["~/board/index.ts", Exclude<NuxtConfig["board"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `vuetify-nuxt-module`
     * @see https://www.npmjs.com/package/vuetify-nuxt-module
     */
    ["vuetify"]: typeof import("vuetify-nuxt-module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/oem/proj/SBwD-Support-UI/home/index`
     */
    ["home"]: typeof import("/home/oem/proj/SBwD-Support-UI/home/index").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/oem/proj/SBwD-Support-UI/account/index`
     */
    ["account"]: typeof import("/home/oem/proj/SBwD-Support-UI/account/index").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/oem/proj/SBwD-Support-UI/kakaoAuthentication/index`
     */
    ["kakaoAuthentication"]: typeof import("/home/oem/proj/SBwD-Support-UI/kakaoAuthentication/index").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/home/oem/proj/SBwD-Support-UI/board/index`
     */
    ["board"]: typeof import("/home/oem/proj/SBwD-Support-UI/board/index").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `vuetify-nuxt-module`
     * @see https://www.npmjs.com/package/vuetify-nuxt-module
     */
    ["vuetify"]?: typeof import("vuetify-nuxt-module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/oem/proj/SBwD-Support-UI/home/index`
     */
    ["home"]?: typeof import("/home/oem/proj/SBwD-Support-UI/home/index").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/oem/proj/SBwD-Support-UI/account/index`
     */
    ["account"]?: typeof import("/home/oem/proj/SBwD-Support-UI/account/index").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/oem/proj/SBwD-Support-UI/kakaoAuthentication/index`
     */
    ["kakaoAuthentication"]?: typeof import("/home/oem/proj/SBwD-Support-UI/kakaoAuthentication/index").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/home/oem/proj/SBwD-Support-UI/board/index`
     */
    ["board"]?: typeof import("/home/oem/proj/SBwD-Support-UI/board/index").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["vuetify-nuxt-module", Exclude<NuxtConfig["vuetify"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["~/home/index.ts", Exclude<NuxtConfig["home"], boolean>] | ["~/account/index.ts", Exclude<NuxtConfig["account"], boolean>] | ["~/kakaoAuthentication/index.ts", Exclude<NuxtConfig["kakaoAuthentication"], boolean>] | ["~/board/index.ts", Exclude<NuxtConfig["board"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },
  }
  interface PublicRuntimeConfig {
   MAIN_API_URL: string,

   AI_BASE_URL: string,

   TOSS_CLIENT_KEY: string,

   TOSS_SECRET_KEY: string,
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }