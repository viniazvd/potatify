<template>
  <div class="flex justify-between flex-wrap gap-[10px] mx-[20px] desktop:mx-[83px] desktop-xl:mx-auto">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "SRow"
}
</script>