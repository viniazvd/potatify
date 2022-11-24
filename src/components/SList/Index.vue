<template>
  <div class="flex rounded bg-primary select-none">
    <s-collapsible :is-opened="isOpened">
      <template #header>
        <div @click.stop="onClick" :class="['item rounded', disabled, hover]">
          <s-icon :icon="props.item.icon" color="white" />

          <span class="pl-3 text-white">{{ props.item.text }}</span>

          <s-icon
            v-if="items?.length"
            icon="mdi:chevron-down"
            color="white"
            :class="['absolute right-2 transition-transform', isOpened && 'rotate-180']"
          />
        </div>
      </template>

      <div
        v-for="groupItem in items"
        :key="groupItem.text"
        :class="['item', groupItem.disabled ? 'bg-gray-400' : 'hover:bg-teal-600']"
        @click.stop="emit('select:item', groupItem)"
      >
        <s-icon :icon="groupItem.icon" color="white" />

        <span class="text-white pl-2">{{ groupItem.text }}</span>
      </div>
    </s-collapsible>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineAsyncComponent, PropType, ref } from 'vue'
import SCollapsible from '../SCollapsible/Index.vue'
const SIcon = defineAsyncComponent(() => import("../SIcon/Index.vue"))

type Item = {
  icon: string,
  text: string,
  active?: boolean,
  disabled?: boolean,
  items?: Array<{ icon: string, text: string, disabled?: boolean }>
}

const props = defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true
  },

  active: Boolean
})

const emit = defineEmits<{ (e: 'select:item', item: Item): void }>()

const isOpened = ref(!!props.item.active)
const items = computed(() => props.item?.items)
const disabled = computed(() => props.item.disabled && 'bg-gray-400')
const hover = computed(() => props.item.disabled ? 'hover:bg-gray-400' : 'hover:bg-teal-600')

function onClick (): void {
  if (props.item.disabled) return

  emit('select:item', props.item)
  isOpened.value = !isOpened.value
}
</script>

<style lang="postcss" scoped>
.item {
  @apply w-full flex items-center p-2 transition-all
}
</style>