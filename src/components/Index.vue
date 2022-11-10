<template>
  <div class="m-12">
    {{activeRadio}}
<!--    <SRadio v-model="activeRadio" label="my radio"></SRadio>-->
    <s-radio-group
      row
      label="label test"
      :options="options"
      v-model="activeRadio"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SRadioGroup from "@components/SRadioGroup/Index.vue";

const activeRadio = ref('111')

const options = ref([
  { label: '111', value: '111' },
  { label: '222', value: '222', disabled: true },
  { label: '333', value: '333' },
  { label: '444', value: '444' },
])
</script>