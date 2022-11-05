<template>
  <button
    ref="SButton"
    :class="classes"
    :disabled="props.disabled"
  >
    <SLoader v-if="props.loading" size="24" />
    <slot v-else />
  </button>
</template>
<script lang="ts" setup>
import {computed, defineAsyncComponent, defineProps, ref, watch} from 'vue'
import {BTN_SIZES, BTN_VARIANTS} from "./SButton.dto";

const SLoader = defineAsyncComponent(() => import('../SLoader/Index.vue'))

const props = defineProps({
  size: {
    type: String,
    default: "medium"
  },
  color: {
    type: String,
    default: "primary"
  },
  variant: {
    type: String,
    default: "default"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  link: {
    type: Boolean,
    default: false
  },
  to: {
    type: String
  },
  loading: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
});

watch(() => props.link, (newVal: boolean) => {
  if (newVal && !props.to) {
    console.error("You must define to when using as link")
  }
}, { immediate: true })

const size = computed(() => {
  switch (props.size) {
    case BTN_SIZES.SM:
      return 'py-[.5rem]'
    case BTN_SIZES.MD:
      return 'py-[.5rem]'
    case BTN_SIZES.LG:
      return 'py-[1rem]'
  }
})

const variant = computed(() => {
  const colorSelected = props.color;

  switch (props.variant) {
    case BTN_VARIANTS.DEFAULT:
      return `rounded-md`
    case BTN_VARIANTS.ROUNDED:
      return `rounded-full`
    case BTN_VARIANTS.OUTLINED:
      return `btn-outlined`
  }
})

const color = computed(() => {
  return `bg-${props.color} hover:bg-${props.color}-200 active:bg-${props.color}-300 text-contrast-primary`
})

const disabled = computed(() => {
  if (props.disabled) {
    return `!bg-gray-200 !text-gray-400 hover:cursor-not-allowed`
  }
})

const booleans = computed(() => [
  {
    "w-full d-block": props.block
  }
])

const classes = ref([
  "btn",
  size.value,
  color.value,
  variant.value,
  disabled.value,
  booleans.value,
  "px-[1rem]"
])

</script>