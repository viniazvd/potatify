<template>
  <div
    :style="avatarSize"
    :class="classes"
    class="overflow-hidden block relative bg-primary"
  >
    <div class="absolute w-full h-full top-1/2 -translate-y-1/2 flex items-center justify-center">
      <slot>
        <img
          class="w-full h-full"
          :src="props.src"
          :alt="props.alt"
        >
      </slot>
    </div>
  </div>
</template>
<script lang="ts" setup>

import {computed, PropType} from "vue";

const props = defineProps({
  src: String,
  alt: String,
  size: [Number, String],
  variant: {
    type: String as PropType<"circle" | "square" | "rounded">,
    default: "circle"
  }
})

const avatarSize = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`
}))

const imageVariant = computed(() => ({
  "s-img-circle": props.variant === "circle",
  "s-img-rounded": props.variant === "rounded",
}))

const classes = computed(() => ({
    ...imageVariant.value,
}))

</script>
<style lang="postcss" scoped>

.s-img {
  @apply inline-block h-6 w-6 rounded-full;
}

.s-img-circle {
  @apply rounded-full
}

.s-img-rounded {
  @apply rounded-lg
}

</style>