<template>
  <div class="relative">
    <span ref="activatorSlot">
      <slot name="activator" v-bind="eventListeners" />
    </span>

    <STransition :name="props.animation">
      <div class="shadow-xl rounded-sm absolute mt-1 ring-1 ring-black/5 min-w-full" v-show="isOpen" ref="dropdownTarget">
        <slot />
      </div>
    </STransition>
  </div>
</template>
<script lang="ts" setup>
import {useToggle, onClickOutside} from "@vueuse/core";
import {defineAsyncComponent, ref} from "vue";

const STransition = defineAsyncComponent(() => import("../STransition/STransition.vue"))

const [isOpen, setIsOpen] = useToggle(false);
const eventListeners = {
  on: {
    click: () => setIsOpen(!isOpen.value)
  }
}

const dropdownTarget = ref();
const activatorSlot = ref();
onClickOutside(dropdownTarget, () => setIsOpen(false), {
  ignore: [activatorSlot]
});

const props = defineProps({
  animation: {
    type: String,
    default: "ZOOM_IN"
  }
})

</script>