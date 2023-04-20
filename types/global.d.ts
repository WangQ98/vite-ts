import type { PropType as VuePropType } from "vue";

declare global {
  // vue
  declare type PropType<T> = VuePropType<T>;

  declare type Nullable<T> = T | null;
  declare type NonNullable<T> = T extends null | undefined ? never : T;
  declare type Recordable<T = any> = Record<string, T>;

  declare interface ViteEnv {
    VITE_PORT: number;
    VITE_DROP_CONSOLE: boolean;
    // plugin
    VITE_USE_MOCK: boolean;
  }
}

declare module "vue" {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>;
}
