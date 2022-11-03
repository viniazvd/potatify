<template>
  <div :style="cardStyles" :class="cardClasses">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  backgroundColor: {
    type: String,
    default: 'white'
  },
  borderColor: String,
  noBorder: {
    type: Boolean,
    default: true
  },
  noHover: Boolean
})

const cardStyles = computed(() => {
  return {
    background: props.backgroundColor,
    borderLeft: props.borderColor ? `4px solid ${props.borderColor}` : 'none'
  }
})

const cardClasses = computed(() => {
  return ['s-card', { '-no-hover': props.noHover }]
})
</script>

<style lang="scss">
@import "./src/styles/_index.scss";
.s-card {
  position: relative;
  box-shadow: $shadow-1;
  transition: all .3s ease;
  border-radius: $border-radius-md;
  padding: 16px;
  &:hover { box-shadow: $shadow-2; }
  &::before {
    display: none;
    position: absolute;
    content: '';
    left: 0px;
    top: 0px;
    height: 100%;
    min-width: 4px;
    width: 4px;
    border-top-left-radius: $border-radius-md;
    border-bottom-left-radius: $border-radius-md;
  }
  &.-no-hover:hover { box-shadow: $shadow-1; }
}
</style>