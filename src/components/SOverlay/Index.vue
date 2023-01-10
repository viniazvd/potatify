<template>
  <STransition :name="props.animation">
    <div v-show="isOpen" class="fixed z-10 top-0 left-0 bg-black/50 w-full h-full" @click="closeOverlay" />
  </STransition>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import STransition from "../STransition/Index.vue";
import { ANIMATION_LIST } from '../STransition/AnimationNames';

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
<script lang="ts">
export default {
  name: "SOverlay"
}
</script>