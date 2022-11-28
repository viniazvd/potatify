<template>
  <div data-testid="SDropzone" class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center px-12 py-4 h-fit border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
      <div class="flex flex-col items-center justify-center pt-5 pb-6">
        <SIcon data-testid="icon" :icon="icon" size="50"></SIcon>
        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <slot name="message">
            <span class="font-semibold">
              Click to upload
            </span>
            or drag and drop
          </slot>
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-400">

          <slot name="description"></slot>

          <span v-if="props.maxWidth && props.maxHeight">
            (MAX. {{ props.maxWidth }}x{{props.maxHeight}}px)
          </span>
        </p>
      </div>

      <div v-if="internalModel" class="flex flex-wrap gap-2 p-4 max-w-full">
        <SChip
          :img-src="getObjectUrl(file)"
          :key="file.lastModified"
          v-for="file in Array.from(internalModel)"
          clearable
          @click:clear="removeImageFromList(file)"
        >
          {{
            props.truncateName && file.name ||
            excerpt(file.name)
          }}
        </SChip>
      </div>
      <input
        v-bind="$attrs"
        @change="onChange"
        id="dropzone-file"
        ref="hiddenInput"
        type="file"
        class="hidden"
      />
    </label>

  </div>
</template>
<script lang="ts" setup>
import SIcon from "../SIcon/Index.vue";
import SChip from "../SChip/Index.vue";
import {computed, ref} from "vue";
import {useSizeConverter} from "@/composables/useSizeConverter";

const { humanizeSize } = useSizeConverter();

const hiddenInput = ref();

const emit = defineEmits(["update:modelValue", "input:change"])

const props = defineProps({
  modelValue: {
    required: true,
    type: null
  },
  icon: {
    type: String,
    default: "uim:upload-alt"
  },
  maxSize: Number, // in MB,
  maxWidth: Number,
  maxHeight: Number,
  errorMessage: String,
  truncateName: Boolean,
})

const internalModel = computed<FileList>({
  get: () => props.modelValue,
  set: val => emit("update:modelValue", val)
})

function removeImageFromList (argFile: File) {
  console.log({ argFile })
  // internalModel.value = internalModel.value.filter((file) => file.lastModified !== argFile.lastModified)
}

async function onChange (event: any) {
  const files = event.target.files;

  for (const file of files) {
    if (props.maxHeight && props.maxWidth) {
      await checkDimensions(file);
    }

    checkSize(file.size)
  }


  internalModel.value = event.target.files;
  emit("input:change", event)
}

function checkSize (size: number) {
  if (!props.maxSize) return;

  if (props.maxSize < (size / 1000000)) {
    throw new Error(props.errorMessage ?? "Your image does not respect the constraints")
  }
}

async function checkDimensions (file: File) {
  const img = new Image();
  const objectUrl = URL.createObjectURL(file);

  return new Promise((resolve, reject) => {
    img.onload = function () {
      URL.revokeObjectURL(objectUrl);

      const response = { width: img.width, height: img.height };

      if (props.maxWidth! < response.width || props.maxHeight! < response.height) {
        reject({
          ...response,
          message: props.errorMessage ?? "Your image does not respect the constraints"
        })
      }

      resolve(response);
    };

    img.src = objectUrl;
  })
}

function getObjectUrl(file: File) {
  const img = new Image();
  const objectUrl = URL.createObjectURL(file);

  return objectUrl
}

function excerpt (value: string): string {
  return value.slice(0, 15) + `...`
}

</script>
<script lang="ts">
export default {
  inheritAttrs: false
}
</script>
<style lang="postcss" scoped></style>