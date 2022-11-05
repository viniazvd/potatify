<template>
  <div>
    <SDropdown animation="FADE_IN" >
      <template #activator="{ on }">
        <SInput :label="props.label" class="hover:cursor-pointer" v-on="on" readonly/>
      </template>
      <div class="min-w-full py-1">
        <div
          role="menuitem"
          tabindex="-1"
          class="option"
          @click="selectItem(item)"
          v-for="(item, index) in  items" :key="index">
          {{ item.name }}
        </div>
      </div>
    </SDropdown>
  </div>
</template>
<script lang="ts" setup>
import SInput from "../SInput/SInputV2.vue";
import SDropdown from "../SDropdown/Index.vue";

const emit = defineEmits(["update:modelValue"]);

function selectItem (item: typeof props.items[0]) {
  if (props.returnObject) {
    return emit("update:modelValue", item);
  }

  return emit("update:modelValue", item[props.itemValue])
}

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  items: {
    type: Array,
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
  }
})

</script>
<style lang="postcss" scoped>
.option {
  @apply text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 hover:cursor-pointer;
}
</style>