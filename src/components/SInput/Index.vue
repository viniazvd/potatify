<template>
  <SInputContainer v-bind="{...props, ...$attrs }" v-model="modelValue" />
</template>

<script lang="ts">
export default {
  name: "SInput",
  inheritAttrs: false
}
</script>

<script lang="ts" setup>
import SInputContainer from "../SInputContainer/Index.vue";
import {defineProps, PropType} from "vue";

const props = defineProps({
  label: {
    required: true,
    type: String
  },
  modelValue: null,
  value: String,
  required: Boolean,
  appendInnerIcon: String,
  appendOuterIcon: String,
  prependInnerIcon: String,
  prependOuterIcon: String,
  hint: String,
  errorMessage: String,
  persistentHint: Boolean,
  rules: {
    type: Array as PropType<Array<Function>>,
    default: []
  },
  eager: Boolean
})
</script>