<template>
  <SInputContainer v-bind="Object.assign({}, props, $attrs)" v-model="vModel" />
</template>

<script lang="ts">
export default {
  name: "SInput",
  inheritAttrs: false
}
</script>

<script lang="ts" setup>
import SInputContainer from "../SInputContainer/Index.vue";
import {computed, defineProps, PropType} from "vue";

const emit = defineEmits(["update:modelValue"]);

const vModel = computed({
  get: () => props.modelValue,
  set: (val: string) => {
    emit("update:modelValue", val)
  }
});

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