<template>
  <!-- <keep-alive> -->
    <div ref="collapsibleEl" class="w-full">
      <div v-if="!noHeader" class="header" @click.stop="emit('toggle')">
        <slot name="header">
          <s-icon icon="ant-design:close-outlined" />
        </slot>
      </div>

      <!-- <s-transition> -->
        <div v-if="props.isOpened">
          <slot />
        </div>
      <!-- </s-transition> -->
    </div>
  <!-- </keep-alive> -->
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
// import STransition from '../STransition/STransition.vue'
import { useAutoAnimate } from '@formkit/auto-animate/vue'
const SIcon = defineAsyncComponent(() => import('@components/SIcon/Index.vue'))

const props = defineProps({
  noHeader: Boolean,
  duration: { type: Number, default: 200 },
  isOpened: { type: Boolean, required: true }
})

const [ collapsibleEl ] = useAutoAnimate({ duration: props.duration })

const emit = defineEmits<{ (e: 'toggle'): void }>()

</script>

<style lang="postcss" scoped>
.header {
  @apply w-full cursor-pointer
}
</style>