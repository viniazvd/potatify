<template>
  <div class="tabber-wrapper" :style="currentColor">
    <ul class="flex flex-wrap -mb-px">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        class="tabber-head-item"
        :class="[isDisabled(tab)]"
        @click="emitTabSelection(tab)"
      >
        <span
          class="tabber-item-link"
          :class="[isActive(tab)]"
        >
          <slot v-bind="{ tab }">
            <SIcon
              v-if="tab.icon"
              :icon="tab.icon"
              class="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500 !text-current"
            />
            {{ tab.name }}
          </slot>
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {computed, defineAsyncComponent, PropType} from 'vue'
import { Tab } from './interfaces/index'
import resolveConfig from "tailwindcss/resolveConfig";
// @ts-ignore
import TailwindConfig from "tailwind.config.cjs";

const currentTheme = resolveConfig(TailwindConfig);

const SIcon = defineAsyncComponent(() => import("../SIcon/Index.vue"));

function isActive(tab: Tab) {
  return tab.name === props.activeTab.name && 'tabber-item-link-active'
}

function isDisabled(tab: Tab) {
  return tab.disabled && "tabber-item-disabled"
}

function emitTabSelection(tab: Tab) {
  if (tab.disabled) return;

  emit('select:tab', tab)
}

// @ts-ignore
const primaryColor = currentTheme.theme?.colors?.["primary"]?.DEFAULT;
const currentColor = computed(() => ({color: props.color ?? primaryColor}));

const props = defineProps({
  tabs: {
    type: Array as PropType<Tab[]>,
    required: true
  },
  color: String,
  activeTab: {
    type: Object as PropType<Tab>,
    required: true
  }
})

const emit = defineEmits<{
  (e: "select:tab", t: Tab): void
}>()
</script>
<style lang="postcss" scoped>
.tabber-wrapper {
  @apply text-sm font-medium text-center border-b border-gray-200
  dark:border-gray-700;
}

ul.tabber-head {
  @apply flex flex-wrap -mb-px
}

li.tabber-head-item {
  @apply mr-2 hover:cursor-pointer
}

span.tabber-item-link {
  @apply inline-block p-4 rounded-t-lg border-b-2 border-transparent select-none
}

li.tabber-head-item:hover:not(.tabber-item-disabled) span {
  @apply hover:text-current hover:border-current
}


li.tabber-head-item:active:not(.tabber-item-disabled) span {
  @apply text-blue-600 border-blue-800 !important
}

li.tabber-head-item span {
  @apply text-gray-500 dark:text-gray-400;
}

li span.tabber-item-link-active {
  @apply text-current border-current dark:text-blue-500 dark:border-blue-500;
}

li.tabber-head-item.tabber-item-disabled {
  @apply text-gray-400 cursor-not-allowed dark:text-gray-500;
}
</style>