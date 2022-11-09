<template>
  <div class="m-12">
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
  { id: '1', label: '111', value: '111' },
  { id: '2', label: '222', value: '222', disabled: true },
  { id: '3', label: '333', value: '333' },
  { id: '4', label: '444', value: '444' },
])
</script>