<template>
  <div
    :class="[variants]"
    :style="[imageSize]"
    data-testid="SAvatarContainer"
    class="overflow-hidden bg-primary p-1">
      <div class="bg-white p-0.5 h-full w-full" :class="[variants]">
        <img
          class="object-cover w-full h-full"
          :class="[variant]"
          :src="props.src"
          :alt="props.alt"
          data-testid="SAvatar"
        />
      </div>
  </div>
</template>

<script lang="ts" setup>

import {computed, PropType} from "vue";
import {fallbackImage} from "./interfaces/fallbacks";
import {S_AVATAR_VARIANTS} from "./interfaces/SAvatar.variants";

const props = defineProps({
  src: {
    type: String,
    default: fallbackImage
  },
  alt: String,
  variant: {
    type: String as PropType<S_AVATAR_VARIANTS[number]>,
    default: S_AVATAR_VARIANTS.CIRCLE
  },
  size: {
    type: [String, Number],
    default: 60
  }
})

const variants = computed(() => ([
  props.variant === S_AVATAR_VARIANTS.CIRCLE && S_AVATAR_VARIANTS.CIRCLE,
  props.variant === S_AVATAR_VARIANTS.ROUNDED && S_AVATAR_VARIANTS.ROUNDED,
  props.variant === S_AVATAR_VARIANTS.SQUARE && S_AVATAR_VARIANTS.SQUARE,
]))

const imageSize = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`
}))

</script>
<style lang="postcss" scoped>

.circle {
  @apply rounded-full
}

.square {

}

.rounded {
  @apply rounded-xl
}

</style>