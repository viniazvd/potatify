<template>
  <div :style="[withFluid]" class="s-container">
    <slot />  
  </div>
</template>
<script lang="ts" setup>
import {computed} from "vue";

const props = defineProps({
  fluid: Boolean,
  isOpen: Boolean
})

const withFluid = computed(() => {
  if (props.fluid) {
    return { maxWidth: "90%" }
  }

  return {}
});

</script>
<style lang="postcss" scoped>

.s-container { 
  @apply mx-auto max-w-mobile tablet:max-w-tablet desktop:max-w-desktop;
}

</style>