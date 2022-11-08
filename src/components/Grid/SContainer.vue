<template>
  <div :class="[withFluid]" class="s-container">
    <slot />  
  </div>
</template>
<script lang="ts" setup>
import {computed} from "vue";

const props = defineProps({
  fluid: Boolean,
  isOpen: Boolean
})

const withFluid = computed(() => props.fluid && "fluid");

</script>
<style lang="postcss" scoped>
.fluid {
  @apply w-full;
}

.s-container { 
  @apply mx-auto max-w-mobile tablet:max-w-tablet desktop:max-w-desktop;
}

</style>