<template>
  <STransition :name="props.animation">
    <div @click="closeOverlay" v-show="isOpen" class="fixed z-10 top-0 left-0 bg-black/50 w-full h-full">

    </div>
  </STransition>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, PropType } from 'vue';
import { ANIMATION_LIST } from '../STransition/AnimationNames';

const STransition = defineAsyncComponent(() => import("@components/STransition/Index.vue"));

const props = defineProps({
  animation: {
    type: String as PropType<keyof typeof ANIMATION_LIST>,
    default: "FADE_IN"
  },
  isOpen: Boolean,
  persistent: Boolean
})

const emit = defineEmits(["close:overlay", "update:isOpen"])

function closeOverlay () {
  emit('close:overlay')

  if (!props.persistent) {
    emit('update:isOpen')
  };

}

</script>
<style lang="postcss"></style>