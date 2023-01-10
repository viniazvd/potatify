<template>
  <div
    :ref="id"
    class="base-feedback z-[20] ring-1 ring-black/5 relative min-h-[50px] p-4 mb-2 min-w-content overflow-hidden bg-white shadow-md cursor-pointer rounded-md"
    @click.prevent="emit('close')"
  >
    <div class="flex place-content-between gap-2 items-center">
      <div class="min-w-[30px]">
        <slot name="prependIcon">
          <s-icon size="30" :icon="icon" :color="color" />
        </slot>
      </div>

      <div class="max-w-[300px] break-words">
        <div class="text-md font-bold">{{ props.title }}</div>
        <p class="text-sm break-all">{{ message }}</p>
      </div>

      <div class="min-w-[20px]">
        <s-icon icon="ant-design:close-outlined" size="20" @click="emit('close')" />
      </div>
    </div>

    <s-progress class="absolute bottom-0 right-0 w-full h-[5px]" :color="color" :duration="props.duration" />
  </div>
</template>

<script setup lang="ts">
import SProgress from '@components/SProgress/Index.vue'
import { defineAsyncComponent, ref, PropType, onMounted, computed } from "vue"

const SIcon = defineAsyncComponent(() => import('@components/SIcon/Index.vue'))

const icons = {
  'info': 'ant-design:info-circle-outlined',
  'error': 'icon-park-outline:emotion-unhappy',
  'warning': 'ant-design:warning-outlined',
  'success': 'icon-park-outline:emotion-happy'
} as const

const props = defineProps({
  id: { type: String, required: true },
  title: { type: String, default: null },
  duration: { type: Number, default: 3 },
  autoClose: { type: Boolean, default: true },
  message: { type: String, required: true },
  prependIcon: String,
  type: { type: String as PropType<keyof typeof icons>, required: true }
});

const emit = defineEmits<{ (e: 'close'): void }>()

const delay = ref<number>(0)
const startedAt = ref<number>(0)
const timer = ref<number | ReturnType<typeof setTimeout>>(-1)

onMounted(() => {
  if (!props.autoClose) return

  startedAt.value = Date.now()
  delay.value = props.duration * 1000
  timer.value = setTimeout(() => emit('close'), delay.value)
})

const icon = computed(() => props.prependIcon || icons[props.type])

const color = computed(() => {
  const colors = {
    'info': '#0067ff',
    'error': '#ff355b',
    'warning': '#e8b910',
    'success': '#00cc69'
  }

  return colors[props.type]
})
</script>
<script lang="ts">
export default {
  name: "SFeedback"
}
</script>
<style lang="postcss" scoped>

.base-feedback {
  @apply border-black/25
}

</style>
