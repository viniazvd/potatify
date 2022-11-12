<template>
  <div class="page-content">
    <!-- <s-progress :duration="7" :value="100" /> -->

    <div class="flex gap-4">
      <s-button @click="createInfoFeedback">Info</s-button>
      <s-button @click="createErrorFeedback">Error</s-button>
      <s-button @click="createWarningFeedback">Warning</s-button>
      <s-button @click="createSuccessFeedback">Success</s-button>
      <s-button @click="createPersistentFeedback">Persistent</s-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue"
import { CreateFeedback } from "@/composables/useFeedback"
// import SProgress from '@components/SProgress/Index.vue'
import SButton from "@components/SButton/Index.vue"

const createInfoFeedback = () => createFeedback({ type: 'info', message: 'my message boladona' })
const createWarningFeedback = () => createFeedback({ type: 'warning', message: 'Warning' })
const createErrorFeedback = () => createFeedback({ type: 'error', message: 'Error', duration: 10 })
const createSuccessFeedback = () => createFeedback({ type: 'success', message: 'Success', duration: 5 })
const createPersistentFeedback = () => createFeedback({ type: 'info', message: 'persistent', autoClose: false })

const createFeedback = inject('create-feedback') as CreateFeedback
// const createFeedback = inject('create-feedback')
</script>
