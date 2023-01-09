<template>
  <SInputContainer v-bind="props"/>
</template>

<script lang="ts">
// interface Props extends InputContainerType {}

export default {
  name: "SInput",
  inheritAttrs: false
}
</script>

<script lang="ts" setup>
import SInputContainer from "../SInputContainer/Index.vue";
import { defineProps } from "vue";

const props = defineProps<{
  label: string,
  modelValue?: any,
  required?: boolean,
  appendInnerIcon?: string,
  appendOuterIcon?: string,
  prependInnerIcon?: string,
  prependOuterIcon?: string,
  hint?: string,
  errorMessage?: string,
  persistentHint?: boolean,
  rules?: Array<(value: string) => boolean | string>,
  eager?: boolean
}>()
</script>