<template>
  <div class="card-shadows card-colors" :class="classes">
    <slot />
  </div>
</template>
<script lang="ts" setup>

import {computed} from "vue";

const props = defineProps({
  noPadding: { type: Boolean, default: false },
  backgroundColor: { type: String, default: "" }
})

const classes = computed(() => ({
  "card-padding": !props.noPadding,
  [props.backgroundColor]: props.backgroundColor
}))

</script>
<style lang="postcss" scoped>

.card-shadows {
  @apply shadow sm:rounded-md dark:shadow-lg
}

.card-colors {
  @apply ring-1 ring-black/5 bg-white dark:bg-stone-800
}

.card-padding {
  @apply px-4 py-5 sm:px-6;
}

</style>