<template>
  <div>
    <label :for="uniqueId" >
      {{ props.label }}
    </label>
    <input class="base-input" v-bind="$attrs" :id="uniqueId" />
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false
}
</script>
<script lang="ts" setup>
import {defineProps, useAttrs} from "vue";
import {useUUID} from "@/composables/useUUID";

const { uniqueId } = useUUID()

const attrs = useAttrs();

const props = defineProps({
    label: {
      required: true,
      type: String
    },
})


</script>
<style scoped lang="postcss">

.base-input {
  @apply relative block w-full appearance-none rounded-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm;
}

</style>