<template>
  <div class="m-12">
    <SCardV2 class="dropdown-style max-w-[500px] prose prose-stone prose:md">
      <p class="mb-4 pl-2">Actions center</p>

      <div class="grid gap-4 grid-rows-3 grid-cols-4">
        <SCardV2 class="row-span-3 col-span-2 dropdown-style lighten h-fit py-2 px-6" no-padding>
          <!-- @TODO avaliar como SList -->
          <div class="flex gap-2 items-center rounded-lg">
            <div class="rounded-full bg-blue-500 p-1 w-[40px] h-[40px] flex items-center justify-center">
              <SIcon icon="mdi:wifi" color="white"></SIcon>
            </div>
            <p>Wifi</p>
          </div>
          <div class="flex gap-2 items-center rounded-lg">
            <!-- @TODO incluir opção no SButton -->
            <div class="rounded-full bg-blue-500 p-1 w-[40px] h-[40px] flex items-center justify-center">
              <SIcon icon="mdi:bluetooth" color="white"></SIcon>
            </div>
            <p>Bluetooth</p>
          </div>
          <div class="flex gap-2 items-center rounded-lg">
            <!-- @TODO incluir opção no SButton -->
            <div class="rounded-full bg-blue-500 p-1 w-[40px] h-[40px] flex items-center justify-center">
              <SIcon icon="mdi:apple" color="white"></SIcon>
            </div>
            <p>Airdrop</p>
          </div>
        </SCardV2>

        <SCardV2 class="row-span-1 col-span-2 dropdown-style lighten" no-padding>
          <div class="flex gap-4 items-center px-4">
            <div class="rounded-full bg-indigo-500 p-1 w-[40px] h-[40px] flex items-center justify-center">
              <SIcon icon="ri:moon-fill" color="white"></SIcon>
            </div>
            <p>Sleep</p>
          </div>
        </SCardV2>
        <SCardV2 class="row-span-2 h-fit col-span-1 dropdown-style lighten w-full" no-padding>
          <div class="p-4 text-center">
            <div class="rounded-full m-auto w-[40px] h-[40px] flex items-center justify-center rotate-90">
              <SIcon size="30" icon="ic:baseline-battery-20" color="gray"></SIcon>
            </div>
            <p class="m-1">Battery</p>
          </div>
        </SCardV2>
        <SCardV2 class="row-span-2 h-fit col-span-1 dropdown-style lighten w-full" no-padding>
          <div class="p-4 text-center">
            <div class="rounded-full m-auto w-[40px] h-[40px] flex items-center justify-center">
              <SIcon icon="ion:copy" color="gray"></SIcon>
            </div>
            <!-- REAVALIAR OS ESPAÇAMENTOS ENTRE TAGS P -->
            <p class="m-1">Share</p>
          </div>
        </SCardV2>
      </div>

    </SCardV2>
  </div>
</template>

<script setup lang="ts">
import SCardV2 from "./SCard/SCardV2.vue";
import SIcon from "./SIcon/Index.vue";

</script>
<style scoped>

/* ISSO PODE SER UM UTIL PRA BLUR BACKDROP */
.dropdown-style {
  @apply rounded-2xl shadow-xl backdrop-blur-2xl bg-blend-overlay;
  background-color: #ffffff7d;
}

.dropdown-style.lighten {
  @apply bg-blend-lighten backdrop-blur-2xl;
  background-color: #ffffff5d;
}

</style>