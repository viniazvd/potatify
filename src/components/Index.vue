<template>
  <div>
    <h1>{{ count }}</h1>

    <button data-testid="increment-button" type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ count: number }>()

const count = ref(0)
</script>