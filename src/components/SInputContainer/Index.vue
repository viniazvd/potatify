<template>
  <div>
    <slot name="label" v-bind="{ label }">
      <label :for="uniqueId" :class="labelClasses">
        {{ props.label }}{{ requiredAsterisk }}
      </label>
    </slot>
    <div class="flex items-center gap-4" :class="prependedOuterSlotsClasses">
      <div class="outer-appendages" @click="emit('click:prepend-outer')" v-if="hasPrependedOuterIconsOrSlots">
        <slot name="prepend:outer">
          <SIcon :icon="props.prependOuterIcon" v-if="props.prependOuterIcon"/>
        </slot>
      </div>
      <div class="grow relative">
        <span
          v-if="(hasPrependedInnerSlots || props.prependInnerIcon)"
          class="inner-appendages" @click="emit('click:prepend-inner')">
          <slot name="prepend:inner">
            <SIcon :icon="props.prependInnerIcon" v-if="props.prependInnerIcon"/>
          </slot>
        </span>
        <div>
          <input
            v-model="vModel"
            class="base-input min-h-[50px]"
            :class="{...inputErrors, ...paddedInput}"
            v-bind="$attrs"
            :id="uniqueId"
          />
          <slot name="value" v-bind="{ value: props.modelValue }"></slot>
          <div v-show="props.hint || props.persistentHint" class="mt-2 text-xs">
            {{props.hint}}
          </div>
          <STransition name="FADE_IN">
            <div :class="isErrored" v-if="hasErrors && message">
              {{message}}
            </div>
          </STransition>
        </div>
        <span
            v-if="(hasAppendedInnerSlots || props.appendInnerIcon)"
            @click="emit('click:append-inner')"
            class="inner-appendages right-0 top-0">
          <slot name="append-inner">
            <SIcon :icon="props.appendInnerIcon" v-if="props.appendInnerIcon"/>
          </slot>
        </span>
      </div>
      <div
        @click="emit('click:append-outer')"
        class="outer-appendages"
        v-if="(hasAppendedOuterSlots || props.appendOuterIcon)">
        <slot name="append:outer">
          <SIcon :icon="props.appendOuterIcon" v-if="props.appendOuterIcon"/>
        </slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
  name: "SinputContainer"
}
</script>
<script lang="ts" setup>
import {computed, defineAsyncComponent, defineProps, onMounted, PropType, ref, useAttrs, useSlots} from "vue";
import {useUUID} from "@/composables/useUUID";
import STransition from "../STransition/Index.vue";
import {useThrottleFn} from "@vueuse/core";

const { uniqueId } = useUUID()

const props = defineProps({
  label: {
    required: true,
    type: String
  },
  modelValue: null,
  value: String,
  required: Boolean,
  appendInnerIcon: String,
  appendOuterIcon: String,
  prependInnerIcon: String,
  prependOuterIcon: String,
  hint: String,
  errorMessage: String,
  persistentHint: Boolean,
  rules: {
    type: Array as PropType<Array<Function>>,
    default: []
  },
  eager: Boolean
});

const emit = defineEmits([
  "click:append-outer",
  "click:append-inner",
  "click:prepend-inner",
  "click:prepend-outer",
  "update:errorMessage",
  "update:modelValue"
])

const vModel = computed({
  get: () => props.value ?? props.modelValue,
  set: (val: string) => emit("update:modelValue", val)
})

const SIcon = defineAsyncComponent(() => import("../SIcon/Index.vue"))

const attrs = useAttrs();
const slots = useSlots();

const hasPrependedOuterSlots = computed(() => Object.keys(slots).includes("prepend:outer"));
const hasPrependedInnerSlots = computed(() => Object.keys(slots).includes("prepend:inner"));
const hasAppendedOuterSlots = computed(() => Object.keys(slots).includes("append:outer"));
const hasAppendedInnerSlots = computed(() => Object.keys(slots).includes("append:inner"));

const hasPrependedOuterIconsOrSlots = computed(() => (hasPrependedOuterSlots.value || props.prependOuterIcon));

const prependedOuterSlotsClasses = computed(() => ({
  "gap-3": hasPrependedOuterIconsOrSlots
}))

const labelClasses = computed(() => ({
  "ml-10": hasPrependedOuterIconsOrSlots.value
}))

const hasErrors = computed(() => Boolean(props.errorMessage));
const message = computed(() => props.errorMessage);

// @TODO re-implementar corretamente
// function validateRules () {
//   props.rules?.some(rule => {
//     const result = rule(props.modelValue);
//
//     if (typeof result === "boolean") {
//       message.value = "";
//       hasErrors.value = false
//     } else {
//       hasErrors.value = true
//       message.value = result;
//       return result
//     }
//   })
// }

// defineExpose({
//   validateRules
// })

// onMounted(() => {
//   if (props.eager) {
//     validateRules()
//   }
// })

const validateInput = useThrottleFn(() => {
  // validateRules()
}, 250, true)

const isErrored = computed(() => ({
  "error-text": hasErrors.value
}))

const inputErrors = computed(() => ({
  "error-text error-border": hasErrors.value
}))

const paddedInput = computed(() => ({
  "!pl-12": props.prependInnerIcon || slots["prepend:inner"],
  "!pr-12": props.appendOuterIcon || slots["append:inner"]
}))

const requiredAsterisk = computed(() => (props.required && "*") || null)
</script>
<style scoped lang="postcss">

.base-input {
  @apply relative block w-full appearance-none rounded-md border border-stone-200 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm dark:bg-transparent dark:text-slate-100;
}

.error-text {
  @apply text-red-600 dark:text-red-300;
}

.inner-appendages {
  @apply absolute h-full z-10 px-3 flex items-center max-h-[50px]
}
.outer-appendages {
  @apply h-[50px] self-start flex items-center
}

.error-border {
  @apply border-red-600 dark:border-red-300 !important;
}

</style>