<template>
  <!-- https://docs.iconify.design/icon-components/vue2/dimensions.html -->
  <Icon
    :icon="icon"
    :width="size"
    :height="size"
    :class="classes"

    v-bind="{ ...$attrs, disabled }"
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
  size: {
    type: [String, Number],
    default: 24
  },
  disabled: Boolean,
  // primaryColor: Boolean,
  // secondaryColor: Boolean
})

const classes = computed(() => {
  return [
    's-icon',
    {
      '--disabled': props.disabled,
      // '--primary': props.primaryColor,
      // '--secondary': props.secondaryColor
    }
  ]
})
</script>

<style lang="scss">
@import "./src/styles/_index.scss";
.s-icon {
  display: inline-block;

  &.--disabled {
    // fill: color(base, light);
    & > * { stroke: color(neutral, light); }
  }

  &.--primary {
    // fill: color(primary, base);
    & > * { stroke: color(primary, base); }
  }

  &.--secondary {
    // fill: color(secondary, base);
    & > * { stroke: color(secondary, base); }
  }
}
</style>