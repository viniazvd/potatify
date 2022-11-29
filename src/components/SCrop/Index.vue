<template>
  <div class="flex flex-col items-center">
    <div
      class="relative inline-block w-auto max-w-[500px]"
      v-on="{
        [events.move]: move,
        [events.end]: () => isDragging = false
      }"
    >
      <img
        ref="imageRef"
        class="image relative z-1 h-auto max-w-full cursor-grab"
        :src="src"
        :style="{
          maxHeight: props.size + 'px',
          opacity: isDragging ? 1 : 0.7
        }"
        crossorigin="anonymous"
        @load="onImageLoad"
        v-on:[events.start].prevent="isDragging = true"
      />

      <c-selector
        v-if="isLoaded && !hasError"
        :src="props.src"
        :scale="scale"
        :selector="selector"
        :coordinates="coordinates"
      />
    </div>

<!--    <s-button primary @click="scale -= 0.1">-</s-button>-->
<!--    <s-button primary @click="scale += 0.1">+</s-button>-->

    <c-range
      :value="selector"
      :min="100"
      :max="size"
      @input="range"
    />

    <slot name="crop" v-bind="{ crop }">
      <s-button primary @click="crop">crop</s-button>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import SButton from '../SButton/Index.vue';
import { ref, watch, onMounted, computed, onUnmounted } from 'vue'
import CRange from './components/SRange.vue'
import CSelector from './components/SSelector.vue'

import { useElementBounding } from '@vueuse/core'

interface Coordinates {
  x: number
  y: number
  width: number
  height: number
}

interface Canvas {
  width?: number | null
  height?: number | null
  toDataURL?: () => any
  getContext?: (v: string) => any
}

const props = defineProps({
  size: { type: Number, default: 400 },

  src: {
    type: String,
    default: 'https://pbs.twimg.com/profile_images/515195474848927744/wWahjxpP_400x400.jpeg'
  }
})

const imageRef = ref<DOMRect | null | any>(null)
const canvas = ref<Canvas>({ width: null, height: null })
const timer = ref<number | ReturnType<typeof setTimeout>>(-1)
const events = ref<{ end: string, move: string, start: string }>({
  end: 'mouseup',
  move: 'mousemove',
  start: 'mousedown'
})
const coordinates = ref<Coordinates>({
  x: 0,
  y: 0,
  width: 0,
  height: 0
})
const scale = ref(1)
const selector = ref<any>(100)
const isLoaded = ref(false)
const hasError = ref(false)
const isDragging = ref<boolean>(false)

watch(() => props.src, () => hasError.value = false)

const emit = defineEmits(['cropped'])

onMounted(() => {
  // const breakpoints = useBreakpoints(breakpointsTailwind)
  // const isMobile = breakpoints.greaterOrEqual('lg')
  // const isMobile = useMediaQuery('(max-width: 678px)')
  const isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp2|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)

  events.value = {
    'end': isMobile ? 'touchend' : 'mouseup',
    'move': isMobile ? 'touchmove' : 'mousemove',
    'start': isMobile ? 'touchstart' : 'mousedown'
  }

  window.addEventListener('resize', onResize)
  canvas.value = document.createElement('canvas')
})

onUnmounted(() => window.removeEventListener('resize', onResize))

const size = computed(() => {
  const { width, height } = coordinates.value

  return coordinates?.value?.width > coordinates?.value?.height ? height : width
})

function range (value: any) {
  selector.value = value
  update(coordinates.value.x, coordinates.value.y)
}

function getPosition (e: any, position: string) {
  const axis: string = position.toUpperCase()
  const { left, top } = useElementBounding(imageRef.value)

  const desktopEvent: number = e['offset' + axis]
  const offset: number = axis === 'X' ? left.value : top.value
  const mobileEvent: number = e.changedTouches && e.changedTouches[0]['client' + axis] - offset

  return mobileEvent || desktopEvent
}

function move (e: MouseEvent) {
  if (!isDragging.value) return

  const x = getPosition(e, 'x') || coordinates.value.x
  const y = getPosition(e, 'y') || coordinates.value.y

  coordinates.value = { ...coordinates.value, x, y }
  update(x, y)
}

function update (x: number, y: number) {
  const halfSelector = selector.value / 2
  const { width, height } = coordinates.value

  coordinates.value.y = y <= selector.value / 2 ? halfSelector : height - halfSelector

  // if (y <= selector.value / 2) coordinates.value.y = halfSelector // up
  if (x <= selector.value / 2) coordinates.value.x = halfSelector // left
  // if (y >= height - selector.value / 2) coordinates.value.y = height - halfSelector // down
  if (x >= width - selector.value / 2) coordinates.value.x = width - halfSelector // right

  if (selector.value > size.value) selector.value = size.value
}

function crop () {
  if (!canvas.value) return console.error('invalid canvas')
  if (hasError.value) return console.error('preview image was not loaded')

  const ctx = canvas.value.getContext?.('2d')

  const { x, y, width, height } = coordinates.value
  const scale = size.value / selector.value

  canvas.value.width = size.value
  canvas.value.height = size.value

  ctx.drawImage(
    imageRef.value,
    - (x - selector.value / 2) * scale,
    - (y - selector.value / 2) * scale,
    width * scale,
    height * scale
  )

  emit('cropped', canvas.value.toDataURL?.())
}

function onImageLoad (event: Event) {
  const { width, height } = (event.target as HTMLElement).getBoundingClientRect()

  coordinates.value = {
    x: width / 2,
    y: height / 2,
    width: width,
    height: height
  }

  update(coordinates.value.x, coordinates.value.y)
  isLoaded.value = true
}

function onResize (e: Event) {
  clearTimeout(timer.value)

  timer.value = setTimeout(() => {
    const { width, height } = useElementBounding(imageRef.value)

    coordinates.value.width = width.value
    coordinates.value.height = height.value
    // scale.value = window.devicePixelRatio

    update(coordinates.value.x, coordinates.value.y)
  }, 50)
}
</script>

<style lang="postcss" scoped>
.image {
  z-index: 1;
  height: auto;
  max-width: 100%;
  cursor: grab;
  display: block;
  position: relative;
  clip-path: url(#mask);
  -webkit-clip-path: url(#mask);
}
</style>