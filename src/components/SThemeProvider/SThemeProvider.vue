<template>
  <div :id="`theme-${uniqueId}`" class="light">
    <slot v-bind="{ isDark, toggleDarkTheme }"></slot>
  </div>
</template>
<script lang="ts" setup>
import {useDark, useToggle} from "@vueuse/core";
import {useUUID} from "@/composables";

const { uniqueId } = useUUID();

const props = defineProps({
  dark: Boolean
})

const isDark =  useDark({
  selector: `#theme-${uniqueId}`,
  initialValue: props.dark ? "dark" : "light"
})

const toggleDark = useToggle(isDark)

function toggleDarkTheme () {
  toggleDark()
}

</script>
<script lang="ts">
export default {
  name: "SThemeProvider"
}
</script>