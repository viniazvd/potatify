<template>
  <div class="stepper rounded-md" :class="[tabsContainer, borderedStepper]">
    <div
      v-for="(step, id, index) in steps"
      :key="id"
      :class="[
        tabsSize,
        isCurrent(id) && `s-stepper-active text-${props.color} border-${props.color}`
      ]"
      class="stepper-head-step stepper-line"
      @click="goToStep(id)"
    >
      <slot
        :name="`header-${id}`"
        v-bind="{ goToNext, goToPrevious, step, stepNames, goTo }"
      >
        <div
          class="py-3 px-6 cursor-pointer select-none relative flex items-center"
          :class="[
            ...tabItems,
          ]">
          <SIcon v-if="step.icon" :icon="step.icon"/>
          <div
            v-else
            class="default-step-marker"
            :class="[
                isAfter(id) && 'step-completed',
                step.error && 'step-error'
            ]"
          >
            {{index + 1}}
          </div>
          <span class="ml-4">
            {{step.title}}
          </span>
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
import {computed, defineAsyncComponent, PropType, defineExpose} from "vue";
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
  filled: Boolean,
  bordered: Boolean
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
  isBefore,
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

defineExpose({
  current,
  goToNext,
  goToPrevious,
  stepNames,
  steps,
  goTo
})
const borderedStepper = computed(() => props.bordered && "stepper-border")

</script>
<script lang="ts">
export default {
  name: "SStepper"
}
</script>
<style lang="postcss" scoped>
.stepper {
  @apply flex justify-between overflow-x-hidden;
}

.stepper-border {
  @apply border border-gray-100
}

.stepper-head-step {
  @apply flex items-center hover:bg-gray-100 hover:cursor-pointer active:bg-gray-200;
  min-height: 4.5rem;
  width: 100%;
}

.stepper-head-step:last-child {
  @apply flex-row-reverse
}

.stepper-head-step:not(:first-child):not(:last-child):before {
  flex: 1;
  height: 1px;
  width: 100%;
  content: "";
  background-color: rgba(0,0,0,.1);
}

.stepper-line:after {
  flex: 1;
  height: 1px;
  width: 100%;
  content: "";
  background-color: rgba(0,0,0,.1);
}

.default-step-marker {
  @apply bg-blue-700 w-6 h-6 flex items-center justify-center rounded-full text-white;
}

.step-completed {
  @apply bg-green-700
}

.s-stepper-active {
  @apply bg-gray-200;
}

.step-error {
  @apply bg-red-700
}
</style>