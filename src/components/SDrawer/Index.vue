<template>
  <STransition name="SLIDE_IN_LEFT">
    <div
      v-show="props.isOpen"
      :style="[width]"
      tabindex="-1"
      class="s-drawer border-r border-stone-500/20"
      aria-labelledby="drawer-navigation-label"
      :class="[behavior, positioning]"
    >
      <slot />
    </div>
  </STransition>
</template>

<script lang="ts" setup>
import STransition from '@components/STransition/Index.vue'
import {computed, PropType, ref} from 'vue';

const positionClasses = ref<{ [name: string]: string }>({
  "left": "position-left",
  "right": "position-right",
  "bottom": "position-bottom"
});

const props = defineProps({
  isOpen: Boolean,
  size: {
    type: Number,
    default: 320
  },
  permanent: Boolean,
  position: {
    type: String,
    default: String as PropType<"left" | "right" | "bottom">
  }
})

const width = computed(() => ({ width: `${props.size}px` }));
const behavior = computed(() => [ props.permanent ? 'permanent' : 'flex' ]);
const positioning = computed(() => [positionClasses.value[props.position]]);
</script>
<script lang="ts">
export default {
  name: "SDrawer"
}
</script>
<style lang="postcss" scoped>
.s-drawer {
  @apply z-50 h-screen overflow-y-auto bg-white dark:bg-stone-800;
}

.permanent {
  @apply fixed
}

</style>