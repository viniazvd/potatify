<template>
  <div data-testid="SCard" class="base card-shadows card-colors overflow-hidden" :class="classes">
    <slot />
  </div>
</template>
<script lang="ts" setup>

import {computed} from "vue";

const props = defineProps({
  noPadding: { type: Boolean, default: false },

  backgroundColor: { type: String, default: "" }
})

const classes = computed(() => ({
  "card-padding": !props.noPadding,
  [`bg-${props.backgroundColor}`]: props.backgroundColor
}))

</script>
<style lang="postcss" scoped>

.base {
  @apply ring-1 ring-black/5 rounded-lg
}

.card-shadows {
  @apply shadow shadow-xl dark:shadow-xl
}

.card-colors {
  @apply bg-white dark:bg-stone-800
}

.card-padding {
  @apply px-4 py-5 sm:px-6;
}

</style>