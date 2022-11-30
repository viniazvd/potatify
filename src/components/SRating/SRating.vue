<template>
  <div>
    <div class="flex items-center">
      <div
        data-testid="star"
        v-for="rating in maxRating"
        :key="rating"
        @click="changeRating(rating)"
        :class="{ active: rating <= (internalRating ?? 0) }"
        class="rating"
      >
        <SIcon :size="size" data-testid="SRatingIcon" color="primary" :icon="props.icon"></SIcon>
      </div>
    </div>
    <div v-if="internalRating" data-testid="summary">{{internalRating}} out of {{maxRating}}</div>
    <div v-else data-testid="summary">No rating was given</div>
  </div>
</template>
<script lang="ts" setup>
import SIcon from "@components/SIcon/Index.vue";
import {computed, ref} from "vue";

const props = defineProps({
  maxRating: {
    type: Number,
    default: 5
  },
  currentRating: Number,
  icon: {
    type: String,
    default: "mdi:star"
  },
  color: String,
  size: {
    type: Number,
    default: 40
  }
})
const internalRating = ref(props.currentRating);

const ratingColor = computed(() => ({
  color: props.color ?? "yellow"
}))

const emit = defineEmits<{
  (e: "change:rating", value: { rating: number }): void
}>()

function changeRating(selectedRating: number) {
  internalRating.value = selectedRating;
  emit("change:rating", { rating: selectedRating })
}
</script>
<style scoped>
.rating {
  @apply cursor-pointer hover:opacity-50
}

.active {
  @apply text-yellow-400
}
</style>