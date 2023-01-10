<template>
    <div v-for="feedback in feedbackStore.feedbacks"
      :key="feedback.id"
    >
      <div
        data-testid="SFeedback"
        class="base-feedback max-w-[25rem] absolute"
        :class="[feedback.yPosition, feedback.xPosition]"
        role="alert">
        <div class="flex items-center mb-3">
          <span class="title">New notification</span>
          <button
            data-testid="SFeedbackClose"
            @click="closeFeedback(feedback.id)"
            class="close-button"
            aria-label="Close">
            <span class="sr-only">Close</span>
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div class="flex items-center">
          <div v-if="feedback.avatar" class="mr-3 inline-block relative shrink-0">
            <SAvatar
              :src="feedback.avatar.src"
              :alt="feedback.avatar.alt"
              data-testid="SFeedbackAvatar"
              size="50"
            />
            <!-- <span class="inline-flex absolute right-0 bottom-0 justify-center items-center w-6 h-6 bg-blue-600 rounded-full">
              <svg aria-hidden="true" class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Message icon</span>
            </span> -->
          </div>
          <div class="text-sm font-normal">
            <div
              v-if="feedback.title"
              data-testid="SFeedbackTitle"
              class="text-sm font-semibold text-gray-900 dark:text-white"
            >{{ feedback.title }}</div>
            <div
              data-testid="SFeedbackMessage"
              class="text-sm font-normal"
            >{{ feedback.message }}</div>
            <span
              v-if="feedback.description"
              data-testid="SFeedbackDescription"
              class="text-xs font-medium text-blue-600 dark:text-blue-500"
            >{{ feedback.description }}</span>
          </div>
        </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useFeedbackStore } from '@/composables';
import {defineAsyncComponent, onMounted} from 'vue';

const SAvatar = defineAsyncComponent(() => import("@components/SAvatar/SAvatar.vue"));

const emit = defineEmits<{ (e: 'close'): void }>();

const feedbackStore = useFeedbackStore();

onMounted(() => {
  // if (!props.autoClose) return;
  //
  // startedAt.value = Date.now();
  // timer.value = setTimeout(() => {
  //   emit('close');
  //
  // }, props.duration);
})

function closeFeedback(id: string) {
  feedbackStore.removeFeedbacks(id)
}

</script>

<style lang="postcss" scoped>
.base-feedback {
  @apply p-4 w-full text-gray-900 bg-white rounded-lg shadow shadow-lg dark:bg-gray-800 dark:text-gray-300;
}

.title {
  @apply mb-1 text-sm font-semibold text-gray-900 dark:text-white;
}

.close-button {
  @apply ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700;
}

.top {
  @apply top-3
}

.right {
  @apply right-3
}

.bottom {
  @apply bottom-3
}

.left {
  @apply left-3
}

.middle {
  @apply top-1/2 -translate-y-1/2
}


.center {
  @apply left-1/2 -translate-x-1/2
}

</style>