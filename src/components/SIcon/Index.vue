<template>
  <Icon
    :icon="icon"
    :width="size"
    :height="size"
    :class="classes"
    :style="{ color: props.color }"
    v-bind="$attrs"
  />
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { defineProps, computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: "gray"
  },
  size: {
    type: [String, Number],
    default: 24
  },
  disabled: Boolean
})

const classes = computed(() => {
  return [
    "s-icon",
    {
      [`text-${props.color}-700`]: props.color,
      ["text-slate-400"]: props.disabled,
    }
  ]
})
</script>
<script lang="ts">
export default {
  name: "SIcon"
}
</script>
<style lang="postcss" scoped>
.s-icon {
  @apply inline-block
}
</style>