<template>
  <main class="flex flex-col gap-4 p-4">
    <router-view></router-view>

    <input type="file" @change="getBase64">

    <s-crop ref="cropRef" :src="src" @cropped="image = $event" />

    <img v-if="image" class="image" :src="image" />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SCrop from '@components/SCrop/Index.vue'

const src = ref('')
const image = ref(null)
const cropRef = ref(null)

function getBase64 (event: any) {
  const file = event.target.files[0]

  let reader = new FileReader()
  reader.readAsDataURL(file)
  // @ts-ignore
  reader.onload = () => src.value = reader.result
}
</script>

<style>
html {
  background: url("./assets/wallpaper-challenge.jpg");
  background-size: cover;
  background-position-x: -450px;
}
</style>