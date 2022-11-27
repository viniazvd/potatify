<template>
  <div class="flex flex-col gap-4 p-4">
    <router-view></router-view>

    <SCard>
      <SHorizontalTimeline :timeline-items="timelineItems" />
    </SCard> 

  </div>
</template>

<script setup lang="ts">
import SButton from '@components/SButton/Index.vue'
import SCard from '@components/SCard/SCardV2.vue'
import SHorizontalTimeline from "@components/STimeline/HorizontalTimeline.vue";
import { ref } from 'vue';

const timelineItems = ref([
  { 
    title: "Potatify Library v1.0.0",
    subtitle: "Released on December 2, 2021",
    description: "Get started with dozens of web components and interactive elements.",
    icon: "mdi:calendar"
  },
  { 
    title: "Potatify Library v1.2.0",
    subtitle: "Released on December 23, 2021",
    description: "Get started with dozens of web components and interactive elements."
  },
  { 
    title: "Potatify Library v1.3.0",
    subtitle: "Released on December 23, 2021",
    description: "Get started with dozens of web components and interactive elements."
  }
])

</script>