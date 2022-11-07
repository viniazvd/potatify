<template>
  <div :class="baseClass">
    <div
      v-if="props.dot"
      class="s-badge s-dot"
      :class="[relativeClasses]"
      :style="[positioningStyles]"
    ></div>
    <div
      v-else
      class="s-badge flex items-center justify-center"
      :style="[badgeSize, positioningStyles]"
      :class="[badgePosition, badgeVariant, relativeClasses]">

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
  dot: Boolean,
  inline: Boolean
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

const badgeOverlap = computed(() => ([
  props.noOverlap
    ? {
        top: `-${Number(props.size)}px`,
        right: `-${Number(props.size)}px`,
        left: props.left && `-${Number(props.size)}px`,
      }
    : {
        right: `-${Number(props.size) * .5}px`,
        top: `-${Number(props.size) * .5}px`,
        left: props.left && `-${Number(props.size) * .5}px`,
      }
]))

const badgePosition = computed(() => props.left ? "left-0" : "right-0");

const relativeClasses = computed(() => ([
  props.inline ? "relative" : "absolute",
]))

const baseClass = computed(() => ([
  "relative max-w-fit",
  {
    "flex gap-2 items-center": props.inline,
    "flex-row-reverse": props.inline && !props.left
  }
]))

const positioningStyles = computed(() => ([
    props.inline ? null : badgeOverlap.value
]))

</script>
<style lang="postcss" scoped>

.s-badge {
  @apply bg-red-500
}

.s-dot {
  @apply w-[10px] h-[10px] rounded-full m-[8px]
}

</style>