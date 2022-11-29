<template>
  <svg
    fill="white"
    class="w-full h-full absolute top-0 left-0 right-0 bottom-0 rounded-sm"
  >
    <defs>
      <filter id="shadow">
        <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity=".5" />
      </filter>

      <clipPath id="mask">
        <circle :r="props.selector / 2" :cx="props.coordinates.x" :cy="props.coordinates.y" />
      </clipPath>
    </defs>

    <circle
      class="selector"
      stroke-width="2"
      stroke="#FFFFFF"
      filter="url(#shadow)"
      :r="props.selector / 2"
      :cx="props.coordinates.x"
      :cy="props.coordinates.y"
    />

    <image
      opacity=".5"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      :href="src"
      :style="{ transform: `scale(${+scale.toFixed(1)})` }"
    />
  </svg>
</template>

<script lang="ts" setup>
// @ts-nocheck
const props = defineProps({
  src: String,
  selector: Number,
  coordinates: Object,
  scale: { type: Number, default: 1 }
})
</script>

<style lang="scss">
.wrapper-selector {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 5px;
}
</style>