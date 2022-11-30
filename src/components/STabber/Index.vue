<template>
  <div class="mx-auto max-w-lg">
    <ul class="flex justify-center gap-5 list-none">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        class="flex-1 max-w-[100px] bg-primary/30 hover:bg-primary/60 px-3 py-2 max-w-[150px] text-center rounded cursor-pointer select-none transition-all"
        :class="{ 'bg-primary/60': tab.id === props.activeTab.id }"
        @click="emit('select:tab', tab)"
      >
        <slot v-bind="{ tab }">
          {{ tab.name }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { Tab } from './interfaces/index'

const props = defineProps({
  tabs: {
    type: Array as PropType<Tab[]>,
    required: true
  },

  activeTab: {
    type: Object as PropType<Tab>,
    required: true
  }
})

const emit = defineEmits<{
  (e: "select:tab", t: Tab): void
}>()
</script>