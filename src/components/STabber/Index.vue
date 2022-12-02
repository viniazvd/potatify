<template>
  <div class="mx-auto max-w-lg">
    <ul class="flex justify-center gap-5 list-none">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        class="tabber-head-item"
        :class="[isDisabled(tab)]"
        @click="emitTabSelection(tab)"
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