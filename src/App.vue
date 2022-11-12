<template>
  <div class="flex flex-col gap-4 p-4">
    <s-button @click="createFeedback({ type: 'info', message: 'kkkk' })">from app</s-button>

    <router-view></router-view>

    <transition-group tag="div" name="s-feedback" class="absolute right-3 top-3 flex flex-col-reverse gap-px">
      <s-feedback
        v-for="item in feedbacks"
        :key="item.id"
        :id="item.id"
        :type="item.type"
        :title="item.title"
        :message="item.message"
        :duration="item.duration"
        :auto-close="item.autoClose"
        @close="removeFeedbacks(item.id)"
      />
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import SButton from '@components/SButton/Index.vue'
import SFeedback from '@components/SFeedback/Index.vue'
import useFeedback from '@/composables/useFeedback'

const { feedbacks, createFeedback, removeFeedbacks } = useFeedback()

console.log(feedbacks)

provide('create-feedback', createFeedback)
</script>

<style lang="postcss" scoped>
.s-feedback-enter-active {
  animation: feedback 0.5s ease-in-out;
}
.s-feedback-leave-active {
  animation: feedback 0.5s ease-in-out reverse;
}

@keyframes feedback {
  from {
    opacity: 0;
    transform: scale(0.4);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>