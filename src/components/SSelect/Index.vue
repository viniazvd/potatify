<template>
  <div>
    <SDropdown @close:dropdown="closeDropdown" ref="SSelectDropdown" animation="FADE_IN" >
      <template #activator="{ on }">
        <SInput
          v-model="value"
          :label="props.label"
          v-bind="$attrs"
          class="hover:cursor-pointer"
          v-on="on"
          readonly
          :append-inner-icon="appendInnerIcon"
          :append-outer-icon="appendOuterIcon"
          @click:append-outer="clearInput"
        />
      </template>
      <div v-bind="containerProps" class="min-w-full py-1 h-fit">
        <div v-bind="wrapperProps" ref="listItem">
            <div
              role="menuitem"
              class="option h-[40px] w-full"
              v-for="item in list"
              :tabindex="item.index"
              :class="menuItemClasses(item.data, item.index)"
              @click="selectItem(item.data)"
              :key="item.index"
            >
              <slot name="options"
                v-memo="[item.data]"
                v-bind="{
                  item: item.data,
                  index: item.index,
                  isSelected: isSelected(item.data)
                }">
                <SCheckbox v-if="props.multiple" :checked="isSelected(item.data)" :label="item.data[props.itemText]" />
                <span v-else>{{ item.data[props.itemText] }}</span>
              </slot>
            </div>
          </div>
      </div>
    </SDropdown>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
  name: "SSelect"
}
</script>
<script lang="ts" setup>
import SInput from "../SInput/Index.vue";
import SCheckbox from "../SCheckbox/Index.vue";
import {computed, defineAsyncComponent, nextTick, PropType, ref, watch} from "vue";
import {tryOnBeforeUnmount, useMagicKeys, useVirtualList, whenever} from "@vueuse/core";

const SDropdown = defineAsyncComponent(() => import("../SDropdown/Index.vue"));

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: [String, Number, Object]
  },
  items: {
    type: Array as PropType<any[]>,
    required: true
  },
  itemText: {
    type: String,
    required: true
  },
  itemValue: {
    type: String,
    required: true
  },
  returnObject: {
    type: Boolean,
    default: false
  },
  multiple: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  }
})

// LOGIC BEHIND THE VIRTUAL LIST
const {list, containerProps, wrapperProps, scrollTo} = useVirtualList(computed(() => props.items), {
  itemHeight: 40
})

// LOGIC BEHIND DROPDOWN
const SSelectDropdown = ref();
async function closeDropdown () {
  // WE SHOULD SET THE TRACKER OF HIGHTLIGHT TO THIS EVERYTIME WE CLOSE THE DROPDOWN
  SSelectDropdown.value?.setIsOpen?.(false);

  await nextTick();

  highlightedItem.value = -1;
  scrollTo(0);
}

function openDropdown () {
  SSelectDropdown.value.setIsOpen(true);
}
// END LOGIC BEHIND DROPDOWN


function isSelected (item: any) {
  return arrTracker.value.has(item)
}

// INPUT APPENDED ITEMS
// @TODO avaliar se dá só pra rodar esse ícone, em vez de carregar dois
const appendInnerIcon = computed(() => (
  SSelectDropdown.value?.isOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'
))

const appendOuterIcon = computed(() => (
  props.clearable ? 'mdi:close-circle' : ""
))
// END INPUT APPENDED ITEMS

// START SELECT ITEM AND MODEL MANAGEMENT LOGIC
const value = ref(props.modelValue); // THIS TRACKS THE VALUE SHOWN INSIDE THE INPUT
const arrTracker = ref(new Set()); // THIS TRACKS THE V-MODEL WHICH WILL BE MADE AVAILABLE

function selectItem (item: typeof props.items[0]) {
  if (!item) return

  if (props.multiple) {
    arrTracker.value.has(item)
    ? arrTracker.value.delete(item)
    : arrTracker.value.add(item);

    if (props.returnObject) {
      emit("update:modelValue", Array.from(arrTracker.value));
    } else {
      const returnValue = Array.from(arrTracker.value)
        // @TODO REVER ESSA TIPAGEM
        .map((item: any) => item[props.itemValue]);

      emit("update:modelValue", returnValue);
    }

    const returnObject = Array.from(arrTracker.value);
    // @TODO REVER ESSA TIPAGEM
    value.value = returnObject.map((item: any) => item[props.itemText]);

  } else {
    arrTracker.value.clear()
    arrTracker.value.add(item)

    value.value = item[props.itemText] || item;

    if (props.returnObject) {
      emit("update:modelValue", item);
    } else {
      emit("update:modelValue", item[props.itemValue] || item);
    }

    closeDropdown();
  }
}

// THIS CLEARS ALL INPUT VALUES
async function clearInput () {
  arrTracker.value.clear();

  await nextTick();

  const returnValue = Array.from(arrTracker.value);
  value.value = returnValue;
  emit("update:modelValue", returnValue);
}

// THIS DECIDES CLASSES WHICH WILL BE APPENDED TO THE ITEM
// WHILE SELECTING AND NAVIGATING
const menuItemClasses = (item:any, index: number) => ({
  's-select-active': isSelected(item),
  's-select-highlight': isHighlighted(index)
})


// LOGIC BEHIND ARROWS NAVIGATION
const highlightedItem = ref(-1);
const {arrowDown, arrowUp, space, escape} = useMagicKeys({
  passive: false,
  onEventFired: (event) => {
    // THIS WILL PREVENT THE PAGE FROM SCROLLING
    const isArrowUpOrDown = (event.key === 'ArrowDown' || event.key === 'ArrowUp');
    const isSpaceKey = (event.code === 'Space');
    if ((isArrowUpOrDown || isSpaceKey) && event.type === 'keydown')
      event.preventDefault()
  }
});

watch(() => props.modelValue, (v) => {
  selectItem(v)
}, { deep: true, immediate: true })

whenever(escape, () => {
  if (!SSelectDropdown.value.isOpen) return;
  closeDropdown()
})

whenever(space, () => {
  if (!SSelectDropdown.value.isOpen) return;
  const foundItem = props.items[highlightedItem.value];
  selectItem(foundItem)
})

whenever(arrowDown, async () => {
  if (!SSelectDropdown.value.isOpen) {
    return openDropdown();
  }

  const itemsSize = props.items?.length;
  const maxIndex = (itemsSize - 1);

  if (highlightedItem.value === maxIndex) return;

  highlightedItem.value = (highlightedItem.value + 1);

  await nextTick();
  await scrollDropdown(3)
})

whenever(arrowUp, async () => {
  if (!SSelectDropdown.value.isOpen) return;

  const minIndex = 0;
  if (highlightedItem.value === minIndex) return;

  highlightedItem.value = (highlightedItem.value - 1);

  await nextTick();
  await scrollDropdown(3)
})

const listItem = ref();
async function scrollDropdown (offset: number) {
  const dropDownHeight = 150;
  const itemHeight = 40;
  const currentIndex = highlightedItem.value;

  if (itemHeight * currentIndex > dropDownHeight) {
    offset = currentIndex <= offset ? offset : offset + 1;

    await nextTick();
    scrollTo(currentIndex - offset);
  }
}

function isHighlighted(index: number) {
  return index === highlightedItem.value
}

</script>
<style lang="postcss" scoped>
.option {
  @apply text-gray-700 dark:text-stone-300 flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-stone-600 hover:cursor-pointer;
}

.s-select-active {
  @apply bg-slate-100 dark:bg-stone-700
}

.s-select-highlight {
  @apply bg-green-100 dark:bg-stone-500 !important
}
</style>