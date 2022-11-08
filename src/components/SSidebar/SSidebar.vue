<template>
  <div
    class="s-navigation-drawer border-r border-stone-500/20"
    :style="[width]"
    tabindex="-1"
    aria-labelledby="drawer-navigation-label"
  >
    <slot />
  </div>
</template>
<script lang="ts" setup>
import {computed} from "vue"

const props = defineProps({
  size: {
    type: Number,
    default: 320
  }
})

const width = computed(() => ({
  width: `${props.size}px`
}))
</script>
<style lang="postcss" scoped>
.s-navigation-drawer {
  @apply fixed top-0 left-0 z-50 h-screen overflow-y-auto bg-white dark:bg-stone-800;
}
</style>