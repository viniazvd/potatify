<template>
  <div class="overflow-x-auto relative">
    <table class="table">
      <thead>
        <slot name="t-head" />
      </thead>
      <tbody>
        <slot name="t-body" />
      </tbody>
    </table>
  </div>
</template>
<script lang="ts" setup>

const props = defineProps({

})

</script>

<script lang="ts">
export default {
  name: "SSimpleTable"
}
</script>
<style lang="postcss" scoped>
.table {
  @apply w-full text-sm text-left text-stone-500 dark:text-stone-400;
}

.table th,
.table td {
  @apply py-3 px-6;
}

.table thead {
  @apply text-xs border-b border-stone-500/50 text-stone-700 dark:text-stone-400;
}

.table tbody tr {
  @apply hover:bg-stone-600
}

.table tr:not(:last-child) {
  @apply border-b border-stone-500/50;
}
</style>