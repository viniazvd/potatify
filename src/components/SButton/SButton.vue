<template>
  <button
    data-testid="SButton"
    :disabled="props.disabled"
    :class="[buttonVariants, block]"
  >

  </button>
</template>
<script lang="ts" setup>

import {computed, PropType} from "vue";
import {BUTTON_VARIANTS} from "@components/SButton/interfaces/ButtonVariants.enum";

const props = defineProps({
  disabled: Boolean,
  variant: {
    type: String as PropType<BUTTON_VARIANTS[number]>,
    default: BUTTON_VARIANTS.CONTAINED
  },
  block: Boolean
})

const buttonVariants = computed(() => ([
  props.variant === BUTTON_VARIANTS.CONTAINED && "contained",
  props.variant === BUTTON_VARIANTS.OUTLINED && "outlined",
]))

const block = computed(() => ([
    props.block && "block"
]))

</script>
<style scoped>

</style>