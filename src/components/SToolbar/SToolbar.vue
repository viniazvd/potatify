<template>
  <Teleport to="body">
    <div
      ref="SToolbar"
      class="s-toolbar"
      :class="colorClass"
      :style="styles"
    >7 a 1</div>
  </Teleport>
</template>
<script lang="ts" setup>

import {computed, onMounted, ref} from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "stone"
  },
  width: String,
  right: Boolean
})

const colorClass = computed(() => ({
  [`bg-${props.color} dark:bg-${props.color}-800`]: props.color,
  ["right-0 fixed top-0"]: props.right
}))

const SToolbar = ref();

onMounted(() => {
  const height = SToolbar.value.clientHeight;
  document.body.style.marginTop = `${height}px`;
})

const styles = computed(() => ({
  width: props.width ? `${props.width}` : null,
}))

</script>
<style lang="postcss" scoped>

.s-toolbar {
  @apply py-5 shadow shadow-lg text-stone-800 dark:text-stone-300;
}
</style>