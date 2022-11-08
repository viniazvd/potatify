<template>
  <Teleport to="#app">
    <STransition name="SLIDE_IN_LEFT">
      <div
        ref="drawer-navigation"
        class="s-navigation-drawer border-r border-stone-500/20"
        :style="[width]"
        tabindex="-1"
        v-show="props.isOpen"
        aria-labelledby="drawer-navigation-label"
      >
        <slot />
      </div>
    </STransition>
  </Teleport>
</template>
<script lang="ts" setup>
import {computed} from "vue";
import STransition from "@components/STransition/STransition.vue";

const props = defineProps({
  size: {
    type: Number,
    default: 320
  },
  isOpen: {
    type: Boolean,
    default: true
  },
  permanent: {
    type: Boolean,
    default: true
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