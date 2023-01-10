<template>
  <main class="flex flex-col gap-4 p-4">
    <router-view></router-view>

    <button @click="isLoading = !isLoading">toggle</button>
    <s-button :loading="isLoading" :disabled="isLoading">Loader button</s-button>
  </main>
</template>

<script setup lang="ts">
import SList from '@components/SList/Index.vue'
import STabber from '@components/STabber/Index.vue'
import SButton from '@components/SButton/Index.vue'
import SIcon from '@components/SIcon/Index.vue'
import SDropdown from '@components/SDropdown/Index.vue'
import { Tab } from '@components/STabber/interfaces/index'
import SHorizontalTimeline from "@components/STimeline/HorizontalTimeline.vue";
import { ref } from 'vue';
import SCardV2 from "@components/SCard/SCardV2.vue";

const isLoading = ref(false)
const tabs = ref<Tab[]>([
  { id: 1, name: 'tab 1', icon: 'mdi:account' },
  { id: 2, name: 'tab 2', icon: 'uit:arrow-circle-left', disabled: true },
  { id: 3, name: 'tab 3', icon: 'uit:arrow-circle-right' },
  { id: 4, name: 'tab 4', icon: 'uit:arrow-circle-left' },
  { id: 5, name: 'tab 5', icon: 'uit:arrow-circle-right' }
])

const item = ref({ icon: 'material-symbols:star-outline-rounded', text: 'Item sozinho boladao', disabled: true })

const itemGroup = ref({
  icon: 'material-symbols:star-outline-rounded',
  text: 'Item grupo boladao',
  items: [
    { icon: 'material-symbols:star-outline-rounded', text: 'Item 11', disabled: true },
    { icon: 'material-symbols:star-outline-rounded', text: 'Item 2' },
  ]
})

const items = ref([
  { icon: 'material-symbols:star-outline-rounded', text: 'Item 1' },
  {
    icon: 'material-symbols:star-outline-rounded',
    text: 'Item 2',
    active: true,
    items: [
      { icon: 'material-symbols:star-outline-rounded', text: 'Item 211', disabled: true },
      { icon: 'material-symbols:star-outline-rounded', text: 'Item 22' },
    ]
  },
  { icon: 'material-symbols:star-outline-rounded', text: 'Item 3', items: [
      { icon: 'material-symbols:star-outline-rounded', text: 'Item 211', disabled: true },
      { icon: 'material-symbols:star-outline-rounded', text: 'Item 22' },
    ] },
  { icon: 'material-symbols:star-outline-rounded', text: 'Item 4' },
])
const activeTab = ref(tabs.value[0])

</script>
<style>
html {
  /*background: url("./assets/wallpaper-challenge.jpg");*/
  /*background-size: cover;*/
  /*background-position-x: -450px;*/
}
</style>