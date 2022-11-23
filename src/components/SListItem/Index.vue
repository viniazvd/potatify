<template>
  <div class="flex bg-primary rounded">
    <s-collapsible :is-opened="isOpened">
      <template v-slot:header>
        <div @click.stop="isOpened = !isOpened; emit('select:item', props.item)" class="relative w-full flex items-center">
          <s-icon :icon="props.item.icon" color="white" />

          <span class="pl-3 text-white">{{ props.item.text }}</span>

          <s-icon
            v-if="items?.length"
            icon="mdi:chevron-down"
            color="white"
            :class="['absolute right-0', isOpened && 'rotate-180']"
          />
        </div>
      </template>

      <div
        v-for="groupItem in items"
        :key="item.text"
        class="w-full flex items-center p-2"
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
const SIcon = defineAsyncComponent(() => import("../SIcon/Index.vue"))
const SCollapsible = defineAsyncComponent(() => import("../SCollapsible/Index.vue"))

type Item = {
  icon: string,
  text: string,
  active?: boolean,
  items?: Array<{ icon: string, text: string }>
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
</script>