<template>
  <div class="flex items-center">
    <input
      :id="uniqueId"
      type="checkbox"
      class="s-checkbox-input focus:ring-primary-500"
      v-bind="$attrs"
      v-model="modelValue"
    >
    <label :for="uniqueId" class="s-checkbox-label">
      {{props.label}}
    </label>
  </div>
</template>
<script lang="ts" setup>
import {useUUID} from "@/composables/useUUID";

const { uniqueId } = useUUID()

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  modelValue: Boolean
})
</script>
<script lang="ts">
// use normal <script> to declare options
export default {
  inheritAttrs: false
}
</script>
<style lang="postcss" scoped>

.s-checkbox-label {
  @apply ml-2 block text-sm text-gray-900;
}

.s-checkbox-input {
  @apply h-4 w-4 rounded border-gray-300 text-indigo-600;
}

</style>