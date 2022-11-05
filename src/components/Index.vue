<template>
  <div class="m-12">
    <h1>{{ count }}</h1>

    <div class="flex w-full gap-4">
      <div class="flex-[100vw/12]"></div>
      <div class="bg-primary-200">Conteudo</div>
    </div>

    <div>
      <SSelectV2
        label="Bater almoço"
        item-value="id"
        item-text="name"
        :items="items"
        return-object
        v-model="selectedItem"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SInput from "./SInput/SInputV2.vue"
import SSelectV2 from "@components/SSelect/SSelectV2.vue";

const selectedItem = ref();

const items = ref([
  { name: "Allan", id: 1 },
  { name: "Vinicius", id: 2 },
  { name: "Laise", id: 3 },
  { name: "Perera", id: 4 },
])

const count = ref(0)
</script>