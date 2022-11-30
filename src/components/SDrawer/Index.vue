<template>
  <STransition name="SLIDE_IN_LEFT">
    <div
      v-show="props.isOpen"
      :style="[width]"
      tabindex="-1"
      class="s-drawer border-r border-stone-500/20"
      aria-labelledby="drawer-navigation-label"
      :class="[behavior]"
    >
      <slot />
    </div>
  </STransition>
</template>

<script lang="ts" setup>
import STransition from '@components/STransition/Index.vue'
import { computed } from 'vue';

const props = defineProps({
  isOpen: Boolean,

  // noOverlay: Boolean,

  size: {
    type: Number,
    default: 320
  },

  permanent: Boolean
})

const width = computed(() => ({ width: `${props.size}px` }))
const behavior = computed(() => [ props.permanent ? 'permanent' : 'flex' ])
// const side = computed(() => [ props.side === "right" ? "right" : "left" ])
</script>

<style lang="postcss" scoped>
.s-drawer {
  @apply z-50 h-screen overflow-y-auto bg-white dark:bg-stone-800;
}

.permanent {
  @apply fixed top-0 left-0
}
</style>