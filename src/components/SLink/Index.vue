<template>
  <component
    :is="type"
    :to="to || null"
    :href="external && to"
    :target="external && '_blank'"

    v-bind="$attrs"

    class="c-link"
  >
    <!-- @slot The text/label of the link -->
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  to: {
    type: [String, Object],
    default: () => null
  },

  link: Boolean,

  external: {
    type: Boolean,
    default: false
  },

  nuxt: {
    type: Boolean,
    default: false
  }
})

const type = computed(() => {
  if (props.link) return 'a'

  return !props.to
    ? 'button' : props.external
      ? 'a' : props.nuxt
        ? 'nuxt-link' : 'router-link'
})
</script>