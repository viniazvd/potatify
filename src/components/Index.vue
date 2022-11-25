<template>
  <div class="m-12">
    <SSelect
      v-model="modelValue"
      :items="items"
      itemValue="id"
      item-text="name"
      multiple
      label="Meu select"
    ></SSelect>
    <SCard no-padding class="mt-12">
      <div class="p-4 prose prose-xl dark:prose-invert">
        <h3>Garlic bread with cheese: What the science tells us</h3>
      </div>
      <SDivider />
      <div>
        <p class="prose prose-xl p-4 dark:prose-invert">
          For years parents have espoused the health benefits of eating garlic bread with cheese to their
          children, with the food earning such an iconic status in our culture that kids will often dress
          up as warm, cheesy loaf for Halloween.
        </p>
      </div>
    </SCard>
<!--    // https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1-->
    <SThemeProvider dark #default="{ toggleDarkTheme, isDark }">
      <button @click="toggleDarkTheme">Change dark mode - {{isDark}}</button>
      <SCard no-padding>
        <div class="p-4">
          meus dados
        </div>
      </SCard>
    </SThemeProvider>

  </div>
</template>

<script setup lang="ts">
import SCard from "./SCard/SCardV2.vue";
import SDivider  from "./SDivider/Index.vue";
import SThemeProvider from "./SThemeProvider/SThemeProvider.vue";
import SSelect from "./SSelect/Index.vue";
import {ref} from "vue";

const modelValue = ref();
const items = ref([
  { name: "Allan", favoriteThing: "Gnocci", id: 1 },
  { name: "Jojo", favoriteThing: "Bizarre Adventures", id: 2 },
])
</script>
