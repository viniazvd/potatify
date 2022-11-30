<template>
  <main class="flex flex-col gap-4">
    <router-view></router-view>

    <input type="file" @change="getBase64">

<!--    <s-crop ref="cropRef" :src="src" @cropped="image = $event" />-->
    <s-crop2 class="m-auto" :image="image" @crop="croppedImage = $event"/>

    <img v-if="croppedImage" class="w-[400px] h-[200px]" :src="croppedImage" />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SCrop from '@components/SCrop/Index.vue'
import SCrop2 from '@components/SCrop/Index2.vue'

const src = ref('')
const image = ref('')
const cropRef = ref(null)
const croppedImage = ref(null)

function getBase64 (event: any) {
  const file = event.target.files[0]
  //
  // let reader = new FileReader()
  // reader.readAsDataURL(file)
  // reader.onload = () => {
  //   // @ts-ignore
  //   src.value = reader.result
  // }

  image.value = URL.createObjectURL(event!.target!.files[0])
}
</script>

<style>
html {
  background-color: lightgray;
  /*background: url("./assets/wallpaper-challenge.jpg");*/
  /*background-size: cover;*/
  /*background-position-x: -450px;*/
}
</style>