<template>
  <!-- https://docs.iconify.design/icon-components/vue2/dimensions.html -->
  <Icon
    v-memo="[icon]"
    :icon="icon"
    :width="size"
    :height="size"
    :class="classes"
    v-bind="$attrs"
  />
</template>

<script lang="ts" setup>
// https://github.com/antfu/unplugin-icons/issues/5
// unplugin-icon limitation: designed to be used statically
// because of that it had to be combined with @iconify/vue2
// import { Icon } from '@iconify/vue2'
import { Icon } from '@iconify/vue';

import { defineProps, computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  color: {
    type: String,
    // text-gray-400
    // hover:text-gray-300
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

<style lang="postcss" scoped>
.s-icon {
  @apply inline-block
}
</style>