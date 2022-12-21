<template>
  <div class="grow">
    <label :for="uniqueId" >
      {{ props.label }}
    </label>
    <div class="flex items-center" :class="hasOuterSlots">
      <div>
        <slot name="prepend:outer"></slot>
      </div>
      <div class="grow relative">
        <span class="inner-appendages">
          <slot name="prepend:inner"></slot>
        </span>
        <input v-model="value" class="base-input" v-bind="$attrs" :id="uniqueId" />
        <span
            @click="emit('click:append-inner')"
            class="inner-appendages right-0 top-0 hover:bg-primary" v-if="props.appendInnerIcon">
          <SIcon :icon="props.appendInnerIcon" />
        </span>
      </div>
      <div @click="emit('click:append-outer')" class="hover:bg-primary" v-if="props.appendOuterIcon">
        <SIcon :icon="props.appendOuterIcon"/>
<!--        <slot name="append:outer"></slot>-->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
  name: "SInput"
}
</script>
<script lang="ts" setup>
import {computed, defineAsyncComponent, defineProps, useAttrs, useSlots} from "vue";
import {useUUID} from "@/composables/useUUID";

const { uniqueId } = useUUID()

const emit = defineEmits(["click:append-outer", "click:append-inner", "update:modelValue"])

const SIcon = defineAsyncComponent(() => import("../SIcon/Index.vue"))

const attrs = useAttrs();
const slots = useSlots();

const hasOuterSlots = computed(() => ({
  "gap-3": Object.keys(slots).includes("outer")
}))

const value = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value)
  }
})

const props = defineProps({
  label: {
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
  }
})


</script>
<style scoped lang="postcss">

.base-input {
  @apply relative block w-full appearance-none rounded-md border border-stone-200 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:bg-transparent dark:text-slate-100;
}

.inner-appendages {
  @apply absolute h-full z-10 px-3 flex items-center
}

</style>