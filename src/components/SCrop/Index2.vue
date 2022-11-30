<template>
  <div v-if="image" :style="{ height: size + 'px', width: size + 'px' }">
    <img
      ref="container"
      :src="image"
      :style="{
        width: '100%',
        height: '100%',
        position: 'relative'
      }"
    />

    <div
      ref="draggable"
      :style="{
        width: '200px',
        height: '200px',
        userSelect: 'none',
        position: 'fixed',
        background: 'red',
        top: `${positionY}px`,
        left: `${positionX}px`
      }"
    >
      <!--        <p>{{ x }} {{ y }}</p>-->
<!--              <p>{{ cropX }} {{ cropY }}</p>-->
      <!--        <p>{{ elementX }} {{ elementY }}</p>-->
      <!--        <p>{{ positionX }} {{ positionY }}</p>-->
    </div>

    <button @click="crop()">crop</button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue'
import { useDraggable, useElementBounding, clamp, useMouseInElement  } from '@vueuse/core'

interface Canvas {
  width?: number | null
  height?: number | null
  toDataURL?: () => any
  getContext?: (v: string) => any
}

const props = defineProps({
  size: {
    type: Number,
    default: 500
  },
  image: String
})

const emit = defineEmits(['crop'])

const container = ref(null)
const draggable = ref(null)

const { x, y } = useDraggable(draggable)
const { elementX, elementY, isOutside } = useMouseInElement(container)
const { width, height } = useElementBounding(draggable)
const { left, right, top, bottom } = useElementBounding(container)

const canvas = ref<Canvas>({ width: null, height: null })

onMounted(() => {
  canvas.value = document.createElement('canvas')
})
const cropX = computed(() => {
  // if (isOutside.value) return
  if (elementX.value < 100) return 100
  if (elementX.value > (props.size - 100)) return props.size - 100

  return elementX.value
})

const cropY = computed(() => {
  // if (isOutside.value) return
  if (elementY.value < 100) return 100
  if (elementY.value > (props.size - 100)) return props.size - 100

  return elementY.value
})

const positionX = computed(() => clamp(left.value, x.value, right.value - width.value))
const positionY = computed(() => clamp(top.value, y.value, bottom.value - height.value))

function crop () {
  const ctx = canvas.value.getContext?.('2d')

  ctx.drawImage(
    container.value,
    // Math.ceil(cropX.value || 0),
    // Math.ceil(cropY.value || 0),
    cropX.value, cropY.value,    // top left corner of the grab
    500, 500,  // how big of a grab
    0, 0,    // where you want the crop to be placed
    200, 300 // size of placement of what was grabbed
  )

  emit('crop', canvas.value.toDataURL?.())
}
</script>