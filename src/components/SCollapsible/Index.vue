<template>
  <!-- <keep-alive> -->
    <div ref="collapsibleEl" @click.stop="!noHeader && toggleCollapsible">
      <div v-if="!noHeader" class="header">
        <slot name="header" v-bind="{ isOpen, toggleCollapsible }">
          <s-icon icon="ant-design:close-outlined" />
        </slot>
      </div>

      <!-- <s-transition> -->
        <div v-if="isOpen">
          <slot />
        </div>
      <!-- </s-transition> -->
    </div>
  <!-- </keep-alive> -->
</template>

<script lang="ts" setup>
import {defineAsyncComponent, ref} from 'vue'
import { useAutoAnimate } from '@formkit/auto-animate/vue'
const SIcon = defineAsyncComponent(() => import('@components/SIcon/Index.vue'))

const props = defineProps({
  noHeader: Boolean,
  duration: { type: Number, default: 200 }
})

const isOpen = ref(false);

const [ collapsibleEl ] = useAutoAnimate({ duration: props.duration });

function toggleCollapsible () {
  isOpen.value = !isOpen.value
}

defineExpose({
  toggleCollapsible,
  isOpen
})

</script>

<script lang="ts">
export default {
  name: "SCollapsible"
}
</script>
<style lang="postcss" scoped>
.header {
  @apply cursor-pointer text-right
}
</style>