<template>
  <div :class="radioGroupClasses">
    <label
      v-for="(option) in internalOptions"
      :key="option.id"
      :class="radioClasses"
      :for="option.id"
    >
      <input
        :id="option.id"
        type="radio"
        class="input hidden"
        @change="emit('update:modelValue', option.value)"
        :value="option.value"
        :disabled="option.disabled"
        :checked="option.value === modelValue"
      />
      <span :class="[
        'radio',
        'radio-colors',
        option.disabled && 'radio-disabled'
        ]"
      />

      <span :class="[
        'text ml-2 text-base',
        option.disabled && 'text-gray-200']
      ">
        {{ option.label }}
      </span>
    </label>
  </div>
</template>

<script lang="ts" setup>
import {PropType, computed} from "vue"
import {useUUID} from "@/composables/useUUID";

const { generateUUID } = useUUID();

const props = defineProps({
  modelValue: String,
  options: {
    type: Array as PropType<{ label: string, disabled?: boolean, value: any }[]>,
    required: true
  },
  row: Boolean
})
const internalOptions = computed(() => props.options
    .map(item => ({ ...item, id: generateUUID() }))
)
const emit = defineEmits(["update:modelValue"])

const radioGroupClasses = computed(() => [
  's-radio-group flex flex-wrap gap-4 flex-col',
   props.row && 'flex-row'
])

const radioClasses = computed(() => [
  's-radio flex items-center'
])
</script>

<style lang="postcss" scoped>
.input:checked + .radio {
  border-width: 7px;
  border-style: solid;
  border-color: #1E7A75;
  background-color: white;
  transition: border-width .1s ease;
}

.radio {
  @apply flex items-center justify-center w-6 h-6 cursor-pointer border-2 border-solid rounded-2xl
}

.radio-colors {
  @apply border-primary hover:border-4 hover:border-primary
}

.radio-disabled {
  @apply hover:border-2 border-gray-200 hover:border-gray-200
}
</style>