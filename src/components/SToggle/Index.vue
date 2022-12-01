<template>
  <label data-testid="SToggleParent" :class="[disabled, invertedLabel]" :for="inputId" class="inline-flex relative items-center cursor-pointer">
    <input
      data-testid="SToggleInput"
      :disabled="props.disabled"
      type="checkbox"
      v-model="internalValue"
      :id="inputId"
      class="sr-only peer"
    >
    <div
      data-testid="SToggleBody"
      class="relative peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600"
      :class="[buttonSize, uncheckedColor, buttonColors]"
    ></div>
    <span data-testid="SToggleLabel" class="s-label-switch">{{ props.label }}</span>
  </label>
</template>
<script lang="ts" setup>
import {computed, defineEmits, defineProps, PropType} from "vue";
import {useUUID} from "@/composables/useUUID";
const { uniqueId: inputId } = useUUID()
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  disabled: Boolean,
  label: {
    required: true,
    type: String
  },
  size: {
    type: String as PropType<"md" | "lg">,
    default: "md"
  },
  color: String,
  invertLabel: Boolean
})

const internalValue = computed({
  get: () => props.modelValue,
  set: value => emit("update:modelValue", value)
})

const buttonColors = computed(() => [
  props.color ?? `peer-checked:bg-primary`
])

const uncheckedColor = computed(() => ["bg-gray-200"]);
const disabled = computed(() => [ props.disabled && "disabled"]);
const invertedLabel = computed(() => [props.invertLabel && "invert-label"])

const buttonSize = computed(() => ({
  "lg-button": props.size === "lg",
  "md-button": props.size === "md",
}))

</script>
<style lang="postcss" scoped>

.s-input-switch {
  @apply w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700;
}

.s-label-switch {
  @apply ml-3 text-sm font-medium text-gray-900 dark:text-gray-300;
}

.disabled {
  @apply cursor-not-allowed opacity-70
}

.invert-label {
  @apply flex-row-reverse
}

.invert-label .s-label-switch {
  @apply ml-0 mr-3
}

.lg-button {
  @apply w-14 h-7 after:h-6 after:w-6 after:top-0.5 after:left-[4px]
}

.md-button {
  @apply w-11 h-6 after:h-5 after:w-5 after:top-[2px] after:left-[2px]
}

</style>