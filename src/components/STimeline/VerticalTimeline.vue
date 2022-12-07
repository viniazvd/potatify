<template>
  <ol class="relative border-l s-timeline-colors">
    <li class="mb-10 ml-4" v-for="item, index in timelineItems" :key="index">
      <slot name="timeline-stopper">
        <div class="s-timeline-stopper"></div>
      </slot>
      <slot name="label" v-bind="{ label: item.label }">
        <time class="s-timeline-label">{{ item.label }}</time>
      </slot>
      <slot name="title" v-bind="{ title: item.title }">
        <h3 class="s-timeline-title">{{ item.title }}</h3>
      </slot>
      <slot name="description" v-bind="{ description: item.description }">
        <p class="s-timeline-description">
          {{item.description}}
        </p>
      </slot>
      <slot name="actions"></slot>
    </li>
  </ol>
</template>
<script setup lang="ts">
import {PropType} from "vue";

const props = defineProps({
  timelineItems: {
    required: true,
    type: Array as PropType<{ label: string, description: string, title: string }[]>,
  }
})

const emit = defineEmits(["click:action"]);

</script>
<script lang="ts">
export default {
  name: "SVerticalTimeline"
}
</script>
<style lang="postcss" scoped>

.s-timeline-colors {
  @apply border-gray-200 dark:border-gray-700
}

.s-timeline-stopper {
  @apply absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700;
}

.s-timeline-label {
  @apply mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500;
}

.s-timeline-title {
  @apply text-lg font-semibold text-gray-900 dark:text-white;
}

.s-timeline-description {
  @apply mb-4 text-base font-normal text-gray-500 dark:text-gray-400;
}

</style>