<template>
  <main class="flex flex-col gap-4 p-4">
    <router-view></router-view>

    <s-select
      required
      item-text="name"
      item-value="name"
      label="COE"
      :items="[{ id: '312321321', name: 'Date' }, { id: '4312412', name: 'Date2' }]"
      v-model="value"
    />

    <transition-group tag="div" name="s-feedback" class="absolute right-3 top-3 flex flex-col-reverse gap-px">
      <s-feedback
        v-for="item in feedbacks"
        :key="item.id"
        :id="item.id"
        :type="item.type"
        :title="item.title"
        :message="item.message"
        :duration="item.duration"
        :prepend-icon="item.prependIcon"
        :auto-close="item.autoClose"
        @close="removeFeedbacks(item.id)"
      />
    </transition-group>
  </main>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import SFeedback from "@components/SFeedback/Index.vue";
import SSelect from "@components/SSelect/Index.vue";
import { useFeedback } from "@/composables/useFeedback";

const { feedbacks, createFeedback, removeFeedbacks } = useFeedback()
provide('create-feedback', createFeedback)

const value = ref({ id: '312321321', name: 'Date' })

</script>
