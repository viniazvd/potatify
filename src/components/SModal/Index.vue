<template>
  <Teleport to="body">
    <STransition mode="in-out" name="FADE_IN">
      <div
        v-if="isOpen"
        class="modal-base backdrop-color backdrop-display"
        @click.self="closeModal"
      >
        <STransition name="ZOOM_IN">
          <div
            ref="animatedEl"
            class="min-w-[600px]"
            :class="animate"
          >
            <div v-if="!noHeader" class="flex items-center shrink-0 py-4">
              <slot name="title" v-bind="{ title: props.title }">
                <div class="mr-auto">{{ title }}</div>
              </slot>

              <slot name="close" v-bind="{ closeModal }">
                <div class="flex items-center ml-auto">
                  <s-icon
                    icon="ci:close-big"
                    size="25"
                    class="cursor-pointer"
                    v-bind="$attrs"
                    @click.native="closeModal"
                  />
                </div>
              </slot>
            </div>

            <slot />
          </div>
        </STransition>
      </div>
    </STransition>
  </Teleport>
</template>
<script lang="ts" setup>
import {computed, defineAsyncComponent, ref} from "vue"
import {useMagicKeys, whenever} from "@vueuse/core"

const SIcon = defineAsyncComponent(() => import("@components/SIcon/Index.vue"))
const STransition = defineAsyncComponent(() => import("@components/STransition/Index.vue"))

const { escape } = useMagicKeys();

// @TODO prevenir o modal de ficar ouvindo ao não estar aberto
whenever(escape, () => {
  if (isOpen.value) closeModal();
})

const props = defineProps({
  title: String,
  noHeader: Boolean,
  modelValue: {
    type: Boolean,
    default: true
  },
  persistent: {
    type: Boolean,
    default: false
  },
  overlayColor: String,
  overlayOpacity: [String, Number]
})

const emit = defineEmits(["update:modelValue", "click:outside"])

const animate = ref()

const animatedEl = ref();
function closeModal () {
  emit("click:outside");

  if (props.persistent) {
    animate.value = "animate__animated animate__slow animate__headShake";
    animatedEl.value.addEventListener("animationend", () => {
      animate.value = ""
    })
    return
  }
  isOpen.value = false;
}

const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => {
    emit("update:modelValue", value)
  }
})

</script>
<script lang="ts">
export default {
  name: "SModal"
}
</script>
<style lang="postcss" scoped>

.modal-base {
  @apply fixed top-0 left-0 w-full h-full z-50;
}

.backdrop-color {
  @apply bg-stone-800/90
}

.backdrop-display {
  @apply flex items-center justify-center
}

</style>