<template>
  <div
    :ref="id"
    class="relative p-5 bg-white shadow-md cursor-pointer max-w-md rounded-md"
    @click.prevent="emit('close')"
  >
    <s-icon class="absolute top-2 right-2" icon="ant-design:close-outlined" @click="emit('close')" />

    <div class="flex items-center pb-2">
      <s-icon class="mr-4" size="30" :icon="icon" :color="color" />

      <div>
        <div class="text-sm pr-6">{{ props.title }}</div>
        <p class="text-xs pt-1.5">{{ message }}</p>
      </div>
    </div>

    <s-progress :color="color" :duration="props.duration" />
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

const icon = computed(() => icons[props.type])

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
