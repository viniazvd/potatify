<template>
  <SInputContainer
    v-bind="props"
  />
</template>
<script lang="ts">
export default {
  name: "SInput",
}
</script>
<script lang="ts" setup>
import SInputContainer from "../SInputContainer/SInputContainer.vue";
import {InputContainerType} from "@components/SInputContainer/SInputContainer.types";

interface Props extends InputContainerType {}

const props = defineProps<Props>()
</script>