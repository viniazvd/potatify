<template>
  <STransition name="SLIDE_IN_LEFT">
    <SSidebar v-show="isOpen" :size="props.size">
      <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
    </SSidebar>
  </STransition>
</template>
<script lang="ts" setup>
import STransition from "@components/STransition/Index.vue";

import SSidebar from "@components/SSidebar/SSidebar.vue"

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  size: {
    type: Number,
    default: 320
  }
})
</script>
