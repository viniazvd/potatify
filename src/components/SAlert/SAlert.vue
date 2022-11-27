<template>
  <div
    :style="baseStyle"
    data-testid="SAlert"
    class="p-4 mb-4 border border-blue-300 bg-current rounded-lg dark:bg-blue-300"
    role="alert"
  >
    <div class="flex items-center">
      <SIcon v-if="props.icon" :icon="props.icon" data-testid="icon"></SIcon>
      <!-- @TODO ADD VARIANTS LATER WITH TESTS WHEN LOOKING FOR SR SPECIFICATION -->
      <span class="sr-only">Info</span>

      <span data-testid="title">
        <slot name="title" v-bind="{ title: props.title }">
          <h3 class="prose prose-lg font-medium text-blue-900">{{title}}</h3>
        </slot>
      </span>
    </div>
    <div class="mt-2 mb-4 text-sm text-blue-900" data-testid="message" v-if="props.message">
      {{ props.message }}
    </div>

    <div data-testid="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SIcon from "../SIcon/Index.vue";
import {computed} from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  message: String,
  icon: String,
  color: String
});

const baseStyle = computed(() => [{
  color: props.color,
}]);

</script>
