<template>
  <svg
    id="loading"

    focusable="false"
    aria-hidden="true"
    role="presentation"
    viewBox="0 0 20 20"
    class="animate-spin"

    :style="sizes"
  >
    <path
      class="fill-primary"
      d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z"
    />
  </svg>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  size: { type: [String, Number], default: 125 }
})

const sizes = computed(() => {
  return {
    width: props.size + 'px',
    height: props.size + 'px'
  }
})
</script>
