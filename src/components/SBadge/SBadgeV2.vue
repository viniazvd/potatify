<template>
  <div class="relative max-w-fit">
    <div v-if="props.dot" class="s-badge s-dot" :class="[badgePosition, badgeOverlap]"></div>
    <div
      v-else
      class="s-badge flex items-center justify-center"
      :style="[badgeSize, badgeOverlap]"
      :class="[badgePosition, badgeVariant, badgeOverlap]">

      <slot name="value" v-bind="{ value }">
        <span v-if="props.icon">
          <SIcon :icon="props.icon" class="!text-slate-200" :size="iconSize"></SIcon>
        </span>
        <span v-else>{{value}}</span>
      </slot>
    </div>
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>

import {computed, defineAsyncComponent, PropType} from "vue";

const SIcon = defineAsyncComponent(() => import("../SIcon/Index.vue"));

const props = defineProps({
  value: String,
  variant: {
    type: String as PropType<"circle" | "rounded" | "square">,
    default: "circle"
  },
  noOverlap: Boolean,
  icon: String,
  size: {
    type: [Number, String],
    default: 24
  },
  left: Boolean,
  dot: Boolean
})

const iconSize = computed(() => Number(props.size) * .8)
const badgeSize = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`
}));

const badgeVariant = computed(() => ({
  "rounded-full": props.variant === "circle",
  "rounded-md": props.variant === "rounded",
}));

const badgeOverlap = computed(() => [
  !props.dot && !props.noOverlap
      // SE NÃO FOR DOT E TIVER OVERLAP
      // @TODO rever condição confusa
      ? { margin: `-${Number(props.size) - Number(props.size) * .3}px` }
      : { margin: `-${props.size}px` },
  props.dot && props.noOverlap ? "-m-3" : "-m-1",
])
const badgePosition = computed(() => props.left ? "left-0" : "right-0");
</script>
<style lang="postcss" scoped>

.s-badge {
  @apply bg-red-500 absolute
}

.s-dot {
  @apply w-[10px] h-[10px] rounded-full
}

</style>