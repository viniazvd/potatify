/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'v-money3'
declare module 'vue-the-mask'
declare module 'vue-coerousel'