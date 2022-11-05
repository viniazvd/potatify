<template>
  <hr :class="classes" />
</template>
<script lang="ts" setup>
import {computed, PropType} from "vue";
import {ValueOf} from "@/@types";

const ORIENTATION = {
  VERTICAL: "vertical",
  HORIZONTAL: "horizontal"
} as const;

const props = defineProps({
  orientation: {
    type: String as PropType<ValueOf<typeof ORIENTATION>>,
    default: "horizontal"
  },
  inset: {
    type: Boolean,
    default: false
  }
})

const orientation = computed(() => {
  switch (props.orientation) {
    case ORIENTATION.HORIZONTAL:
      return "my-[.3rem]"
    case ORIENTATION.VERTICAL:
      return "mx-[.3rem]"
  }
})

const inset = computed(() => ({
  "mx-2": props.inset
}))

const classes = computed(() => {
  return [
    "border-solid",
    "border-1",
    "border-grey-400",
    orientation.value,
    inset.value
  ]
})

</script>