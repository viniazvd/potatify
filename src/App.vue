<template>
  <main class="flex flex-col gap-4 p-4">
    <router-view></router-view>

    <div class="w-[600px] mx-auto">
<!--      <s-tabber :tabs="tabs" :active-tab="activeTab" @select:tab="(t: Tab) => activeTab = t" />-->

      <s-tabber :tabs="tabs" :active-tab="activeTab" @select:tab="(t: Tab) => activeTab = t">
        <template v-slot="{ tab }">
          <s-icon v-if="tab.icon" :icon="tab.icon" />
          {{ tab.name }}
        </template>
      </s-tabber>
    </div>

<!--    <SCard>-->
<!--      <SHorizontalTimeline :timeline-items="timelineItems" />-->
<!--    </SCard> -->

  </main>
</template>

<script setup lang="ts">
import SButton from '@components/SButton/Index.vue'
import SCard from '@components/SCard/SCardV2.vue'
import STabber from '@components/STabber/Index.vue'
import SIcon from '@components/SIcon/Index.vue'
import { Tab } from '@components/STabber/interfaces/index'
import SHorizontalTimeline from "@components/STimeline/HorizontalTimeline.vue";
import { ref } from 'vue';

const tabs = ref<Tab[]>([
  { id: 1, name: 'tab 1', icon: 'uit:arrow-circle-down' },
  { id: 2, name: 'tab 2', icon: 'uit:arrow-circle-left' },
  { id: 3, name: 'tab 3', icon: 'uit:arrow-circle-right' },
  { id: 4, name: 'tab 4', icon: 'uit:arrow-circle-left' },
  { id: 5, name: 'tab 5', icon: 'uit:arrow-circle-right' }
])

const activeTab = ref(tabs.value[0])

// const timelineItems = ref([
//   {
//     title: "Potatify Library v1.0.0",
//     subtitle: "Released on December 2, 2021",
//     description: "Get started with dozens of web components and interactive elements.",
//     icon: "mdi:calendar"
//   },
//   {
//     title: "Potatify Library v1.2.0",
//     subtitle: "Released on December 23, 2021",
//     description: "Get started with dozens of web components and interactive elements."
//   },
//   {
//     title: "Potatify Library v1.3.0",
//     subtitle: "Released on December 23, 2021",
//     description: "Get started with dozens of web components and interactive elements."
//   }
// ])
</script>
<style>
html {
  /*background: url("./assets/wallpaper-challenge.jpg");*/
  /*background-size: cover;*/
  /*background-position-x: -450px;*/
}
</style>