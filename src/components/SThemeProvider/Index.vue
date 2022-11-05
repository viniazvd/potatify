<template>
  <div :class="classes">
    <div class="bg-slate-50 text-stone-800 dark:bg-stone-900 dark:text-slate-200">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const classes = computed(() => ({
    "dark": props.isDark,
  }))

const props = defineProps({
  isDark: {
    type: Boolean,
    default: false,
    required: true
  }
})

</script>