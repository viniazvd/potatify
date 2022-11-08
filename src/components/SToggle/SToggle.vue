<template>
  <label :for="inputId" class="inline-flex relative items-center mb-5 cursor-pointer">
    <input type="checkbox" v-model="modelValue" :id="inputId" class="sr-only peer">
    <div
      class="bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary dark:peer-focus:ring-primary-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-primary"
      :class="[buttonSize, buttonColors]"
    ></div>
    <span class="s-label-switch" v-once>{{ props.label }}</span>
  </label>
</template>
<script lang="ts" setup>
import {computed, defineProps, PropType} from "vue";
import {useUUID} from "@/composables/useUUID";

const { uniqueId: inputId } = useUUID()

const props = defineProps({
  modelValue: null,
  label: {
    required: true,
    type: String
  },
  size: {
    type: String as PropType<"md" | "lg">,
    default: "md"
  },
  color: {
    type: String,
    default: ""
  }
})

const buttonColors = computed(() => ({
  // peer-checked:bg-primary
  [`peer-checked:bg-${props.color}`]: props.color
}))

const buttonSize = computed(() => ({
  "w-14 h-7 after:h-6 after:w-6 after:top-0.5 after:left-[4px]": props.size === "lg",
  "w-11 h-6 after:h-5 after:w-5 after:top-[2px] after:left-[2px]": props.size === "md",
}))

</script>
<style lang="postcss" scoped>

.s-input-switch {
  @apply w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700;
}

.s-label-switch {
  @apply ml-3 text-sm font-medium text-gray-900 dark:text-gray-300;
}

</style>