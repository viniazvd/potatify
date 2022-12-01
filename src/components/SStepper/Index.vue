<template>
  <div class="flex border-b border-stone-300/50" :class="[tabsContainer]">
    <div v-for="(step, id, index) in steps" :key="id" :class="[tabsSize]">
      <slot
        :name="`header-${id}`"
        v-bind="{ goToNext, goToPrevious, step, stepNames, goTo }"
      >
        <div
          @click="goToStep(id)"
          class="py-3 px-6 cursor-pointer select-none relative gap-1 flex items-center"
          :class="[
            ...tabItems,
            isCurrent(id) && `s-stepper-active text-${props.color} border-${props.color}`
          ]">
          <SIcon v-if="step.icon" :icon="step.icon"/>
          {{step.title}}
        </div>
      </slot>
    </div>
  </div>
  <div
    v-for="(step, id, index) in steps"
    :key="id"
    v-show="isCurrent(id)"
    >
    <slot
      :name="`body-${id}`"
      v-bind="{ goToNext, goToPrevious, step, stepNames, goTo }"
    >
    </slot>
  </div>
</template>
<script lang="ts" setup>
import {useStepper} from "@vueuse/core";
import {computed, defineAsyncComponent, PropType} from "vue";
import {Step} from "./interfaces/step.interface";

const SIcon = defineAsyncComponent(() => import("@components/SIcon/Index.vue"));

const props = defineProps({
  steps: {
    type: Object as PropType<Step>,
    required: true
  },
  initialStep: String,
  grow: Boolean,
  textCentered: Boolean,
  color: String as PropType<"primary" | "secondary" | "gray" >,
  pill: Boolean,
  filled: Boolean
})

const tabsSize = computed(() => [
  props.grow && "grow"
])

const tabsContainer = computed(() => [
    props.pill && "border-none",
    props.filled && "p-2 pb-0 pl-0 bg-gray-100"
])

const tabItems = computed(() => [
  props.textCentered && "justify-center",
  props.color && `hover:text-${props.color} active:text-${props.color}-400`,
  props.pill && `pill border-none bg-gray-200 mr-4 rounded-lg`,

]);

const {
  current,
  get,
  goToNext,
  goToPrevious,
  isAfter,
  isCurrent,
  stepNames,
  steps,
  goTo,
  next,
  previous
} = useStepper(props.steps, props.initialStep);

const emit = defineEmits(["go:to-step"])

function goToStep (id: string | number) {
  emit("go:to-step", id);
  goTo(id)
}


</script>
<style lang="postcss" scoped>
.s-stepper-active {
  @apply border-b-2 bg-gray-300
}

.pill {
  @apply hover:bg-gray-300 active:bg-gray-400 text-gray-600
}

.s-stepper-active {
  @apply bg-gray-400
}

</style>