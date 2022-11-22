<template>
  <div class="flex flex-wrap justify-center space-x-2 chips">
    <span
      data-testid="SChip"
      class="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease select-none flex items-center gap-1"
      :class="[clearable, withSize]"
      >
      <slot name="image">
        <img src="" alt="" :class="[withImage]" />
      </slot>
      <slot />

      <slot name="clearable">
        <button data-testid="clearable" @click="emit('click:clear')" v-if="props.clearable" class="bg-transparent hover:bg-gray-400 rounded-full hover focus:outline-none transition">
          <SIcon icon="mdi:close" class="text-gray-500" />
        </button>
      </slot>
    </span>
</div>
</template>
<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { defineAsyncComponent, PropType } from 'vue';
import {CHIP_SIZES} from "@components/SChip/interfaces/chip-sizes.enum";

const SIcon = defineAsyncComponent(() => import("@components/SIcon/Index.vue"));

const props = defineProps({
  clearable: Boolean,
  size: {
    type: String as PropType<CHIP_SIZES>,
    default: CHIP_SIZES.MD
  },
  imgSrc: String
})

const emit = defineEmits(["click:clear"])

const clearable = computed(() => props.clearable && "clearable");

const sizeOptions = {
  [CHIP_SIZES.SM]: "small",
  [CHIP_SIZES.MD]: "medium",
  [CHIP_SIZES.LG]: "large"
} as const;

const withSize = computed(() => sizeOptions[props.size])

const withImage = computed(() => props.imgSrc && "chip-image")

</script>
<style lang="postcss" scoped>
.chips .clearable  {
  @apply pr-2 !important;
}

.chips .small {
  @apply px-2 py-1;
}

.chips .small.clearable {
  @apply pr-1 !important
}

.chips .medium {
  @apply px-4 py-2;
}


.chips .large {
  @apply px-5 py-3;
}

.chips .large.clearable {
  @apply pr-3 !important
}

</style>