<template>
  <div :class="radioGroupClasses">
    <label
      v-for="(option, index) in options"

      :key="index"
      :for="option.id"
      :class="radioClasses"

      @click="!option.disabled && emit('update:modelValue', option.value)"
    >
      <input
        :id="option.id"

        type="radio"
        class="input hidden"

        :value="option.value"
        :disabled="option.disabled"
        :checked="option.value === modelValue"
      >
      <span :class="[
        'radio',
        {
          'border-gray-200': option.disabled,
          'border-primary hover:border-4 hover:border-secondary': !option.disabled
        }]"
      />

      <span :class="[
        'text ml-2 text-base',
        {
          'text-gray-200': option.disabled
        }]
      ">
        {{ option.label }}
      </span>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed } from "vue"

const props = defineProps({
  modelValue: String,

  options: {
    type: Array as PropType<{ id: string, label: string, disabled?: boolean, value: any }[]>,
    required: true
  },

  row: Boolean
})

const emit = defineEmits(["update:modelValue"])

const radioGroupClasses = computed(() => [
  's-radio-group flex flex-wrap',
  {
    'flex-row': props.row,
    'flex-col': !props.row
  }
])

const radioClasses = computed(() => [
  's-radio flex items-center',
  {
    'mr-4 last:mr-0': props.row,
    'mb-4 last:mb-0': !props.row,
  }
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
</style>