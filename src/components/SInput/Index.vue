<template>
  <SInputContainer
    v-bind="props"
  />
</template>

<script lang="ts">
// interface Props extends InputContainerType {}

export default {
  name: "SInput"
}
</script>

<script lang="ts" setup>
import SInputContainer from "../SInputContainer/Index.vue";
import { defineProps } from "vue";
// import {InputContainerType} from "@components/SInputContainer/SInputContainer.types";

const props:any = defineProps();
</script>