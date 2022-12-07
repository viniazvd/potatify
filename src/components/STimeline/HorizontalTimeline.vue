<template>
  <ol class="sm:flex">
    <li 
      data-testid="SHorizontalTimelineListItem" 
      class="relative mb-6 sm:mb-0 grow"
      v-for="(timelineItem, index) in props.timelineItems" :key="timelineItem.title + index"  
    >
      <div class="flex items-center">
        <div
          :style="{
            backgroundColor: timelineItem.color
          }"
          :class="[!timelineItem.color && 'bg-primary']"
          class="flex z-10 justify-center items-center w-6 h-6 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
        >
          <SIcon 
            v-if="timelineItem.icon" 
            :icon="timelineItem.icon"
            size="18"
            color="white"
            class="text-blue-600 opacity-90 dark:text-blue-300"  
          ></SIcon>
        </div>
        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
      <div class="mt-3 sm:pr-8">
        <h3 data-testid="SHorizontalTimelineTitle" class="text-lg font-semibold text-gray-900 dark:text-white">
          {{ timelineItem.title }}
        </h3>
        <time
          v-if="timelineItem.subtitle"
          data-testid="SHorizontalTimelineSubTitle"
          class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >{{ timelineItem.subtitle }}</time
        >
        <p 
          v-if="timelineItem.description"
          data-testid="SHorizontalTimelineDescription"
          class="text-base font-normal text-gray-500 dark:text-gray-400">
          {{ timelineItem.description }}
        </p>
      </div>
    </li>
  </ol>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, PropType } from 'vue';
import { TimelineItem } from './interfaces/Timeline.interface';

const SIcon = defineAsyncComponent(() => import("../SIcon/Index.vue"))

const props = defineProps({
  timelineItems: {
    type: Array as PropType<TimelineItem[]>,
    default: [],
    required: true
  }
})

</script>
<script lang="ts">
export default {
  name: "SHorizontalTimeline"
}
</script>
<style lang="postss" scoped></style>
