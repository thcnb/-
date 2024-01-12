import UTest from '@/components/UTest.vue'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UTest: typeof UTest
  }
}
