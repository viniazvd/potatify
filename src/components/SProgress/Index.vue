<template>
  <div class="s-progress">
    <div class="bar" :style="[width, color, transitionDuration]" />
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  value: {
    type: Number,
    default: 100,
    validator: (val: number) => val >= 0 && val <= 100
  },
  duration: { type: Number, default: 4 },
  color: { type: String, default: '#1E7A75' }
})

const progress = ref(0)

onMounted(() => setTimeout(() => progress.value = props.value, 250))

const width = computed(() => ({ width: progress.value + '%' }))
const color = computed(() => ({ backgroundColor: props.color }))
const transitionDuration = computed(() => ({ transitionDuration: props.duration + 's' }))
</script>
<script lang="ts">
export default {
  name: "SProgress"
}
</script>
<style lang="postcss" scoped>
.s-progress {
  @apply flex bg-white w-full h-1 rounded-lg
}

.bar {
  @apply rounded-lg
}
</style>