<template>
  <div>
    <slot name="label" v-bind="{ label }">
      <label :for="uniqueId" >
        {{ props.label }}
      </label>
    </slot>
    <div class="flex items-center" :class="hasOuterSlots">
      <div>
        <slot name="prepend:outer"></slot>
      </div>
      <div class="grow relative">
        <span class="inner-appendages">
          <slot name="prepend:inner"></slot>
        </span>
        <div>
          <input @input="validateInput" v-model="modelValue" class="base-input min-h-[50px]" :class="inputErrors" v-bind="$attrs" :id="uniqueId" />
          <slot name="value" v-bind="{ value: modelValue }"></slot>
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
            @click="emit('click:append-inner')"
            class="inner-appendages right-0 top-0 hover:bg-primary">
          <slot name="append-inner">
            <SIcon :icon="props.appendInnerIcon" v-if="props.appendInnerIcon"/>
          </slot>
        </span>
      </div>
      <div @click="emit('click:append-outer')" class="hover:bg-primary">
        <slot name="append:outer">
          <SIcon :icon="props.appendOuterIcon" v-if="props.appendOuterIcon"/>
        </slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false
}
</script>
<script lang="ts" setup>
import {computed, defineAsyncComponent, defineProps, onMounted, PropType, ref, useAttrs, useSlots} from "vue";
import {useUUID} from "@/composables/useUUID";
import STransition from "../STransition/STransition.vue";
import {useThrottleFn} from "@vueuse/core";

const { uniqueId } = useUUID()

const emit = defineEmits(["click:append-outer", "click:append-inner"])

const SIcon = defineAsyncComponent(() => import("../SIcon/Index.vue"))

const attrs = useAttrs();
const slots = useSlots();

const hasOuterSlots = computed(() => ({
  "gap-3": Object.keys(slots).includes("outer")
}))

const props = defineProps({
  label: {
    required: true,
    type: String
  },
  modelValue: {
    type: null
  },
  appendInnerIcon: {
    type: String
  },
  appendOuterIcon: {
    type: String
  },
  hint: String,
  error: Boolean,
  persistentHint: Boolean,
  rules: {
    type: Array as PropType<Array<Function>>,
    default: []
  },
  eager: Boolean
})

const hasErrors = ref(false);
const message = ref("");

function validateRules () {
  props.rules?.forEach(rule => {
    const result = rule(props.modelValue);
    const converted = result === true ? null : result
    message.value = converted;
    hasErrors.value = converted
  })
}

onMounted(() => {
  if (props.eager) {
    validateRules()
  }
})

const validateInput = useThrottleFn(() => {
  validateRules()
}, 250, true)

const isErrored = computed(() => ({
  "error-text": props.error || hasErrors.value
}))

const inputErrors = computed(() => ({
  "error-text error-border": hasErrors.value
}))

</script>
<style scoped lang="postcss">

.base-input {
  @apply relative block w-full appearance-none rounded-md border border-stone-200 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm dark:bg-transparent dark:text-slate-100;
}

.error-border {
  @apply border-red-600 dark:border-red-300;
}

.error-text {
  @apply text-red-600 dark:text-red-300;
}

.inner-appendages {
  @apply absolute h-full z-10 px-3 flex items-center
}

</style>