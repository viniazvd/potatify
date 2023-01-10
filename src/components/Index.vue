<template>
  <div class="m-12">
    <s-button @click="createInfoFeedback">Info</s-button>
    <s-button @click="createErrorFeedback">Error</s-button>
    <s-button @click="createWarningFeedback">Warning</s-button>
    <s-button @click="createSuccessFeedback">Success</s-button>
    <s-button @click="createPersistentFeedback">Persistent</s-button>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue"
import { CreateFeedback } from "@/composables/useFeedback";

import SButton from "@components/SButton/Index.vue"

const createFeedback = inject('create-feedback') as CreateFeedback

const createInfoFeedback = () => createFeedback({ type: 'info', message: 'my message boladonaaaaaaaaaaa dasdasdasdsd dasdsdasdad' })
const createWarningFeedback = () => createFeedback({ type: 'warning', prependIcon: 'material-symbols:close', message: 'Warning' })
const createErrorFeedback = () => createFeedback({ type: 'error', message: 'Error', duration: 10 })
const createSuccessFeedback = () => createFeedback({ type: 'success', message: 'Success', duration: 5 })
const createPersistentFeedback = () => createFeedback({ type: 'info', message: 'persistent', autoClose: false })

</script>

<style scoped>

/* ISSO PODE SER UM UTIL PRA BLUR BACKDROP */
.dropdown-style {
  @apply rounded-2xl shadow-xl backdrop-blur-2xl bg-blend-overlay;
  background-color: #ffffff7d;
}

.dropdown-style.lighten {
  @apply bg-blend-lighten backdrop-blur-2xl;
  background-color: #ffffff5d;
}

</style>