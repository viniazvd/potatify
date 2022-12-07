<template>
  <div class="flex-auto h-auto grid-size" :style="css">
    <slot />
  </div>
</template>
<script lang="ts" setup>

import {computed} from "vue";

const props = defineProps({
  cols: {
    type: [Number, String],
    default: 12
  }
})

const css = computed(() => ({
  maxWidth: `calc(${8.33 * Number(props.cols)}% - ${10 * Number(props.cols)}px)`
}))

</script>
<script lang="ts">
export default {
  name: "SColumn"
}
</script>
<style scoped lang="postcss">
.grid-size {
  min-width: calc(8.33% - 10px);
}
</style>