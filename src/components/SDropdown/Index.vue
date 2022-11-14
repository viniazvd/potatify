<template>
  <div class="relative">
    <span ref="activatorSlot">
      <slot name="activator" v-bind="eventListeners" />
    </span>

    <STransition :name="props.animation">
      <div class="dropdown-borders dropdown-shadows dropdown-position dropdown-colors ring-1 ring-black/5 min-w-full" v-show="isOpen" ref="dropdownTarget">
        <slot />
      </div>
    </STransition>
  </div>
</template>
<script lang="ts" setup>
import {useToggle, onClickOutside} from "@vueuse/core";
import {defineAsyncComponent, PropType, ref} from "vue";
import { ANIMATION_LIST } from "../STransition/AnimationNames";

const STransition = defineAsyncComponent(() => import("../STransition/Index.vue"))

const [isOpen, setIsOpen] = useToggle(false);
const eventListeners = {
  on: {
    click: async () => {
      emit("close:dropdown")
      setIsOpen(!isOpen.value)
    }
  }
}

defineExpose({setIsOpen, isOpen})

const dropdownTarget = ref();
const activatorSlot = ref();
onClickOutside(dropdownTarget, () => setIsOpen(false), {
  ignore: [activatorSlot]
});

const emit = defineEmits(["close:dropdown"])

const props = defineProps({
  animation: {
    type: String as PropType<keyof typeof ANIMATION_LIST>,
    default: "ZOOM_IN"
  }
})

</script>

<style lang="postcss" scoped>
.dropdown-shadows {
  @apply shadow-xl
}

.dropdown-position {
  @apply absolute mt-1;
}

.dropdown-borders {
  @apply rounded-sm;
}

.dropdown-colors {
  @apply  bg-white dark:bg-stone-800;
}

</style>