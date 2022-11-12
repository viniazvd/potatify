<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto">
      <!-- TABLE WRAPPER-->
      <div class="min-w-full">
        <div class="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th v-if="props.selectable">
                  <input type="checkbox" v-model="checkAllIsToggled" />
                </th>
                <th
                  :style="{ minWidth: col.width }"
                  scope="col"
                  :class="setAlignTo(col.align)"
                  class="min-w-content whitespace-pre"
                  v-for="col in props.cols"
                  :key="col.name">
                  {{ col.name }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="props.loading">
                <th :colspan="props.data?.length" class="text-center">
                  <SLoader size="24"></SLoader>
                </th>
              </tr>
              <!-- GERA CADA LINHA   -->
              <tr v-for="(row, rowIndex) in internalData" :key="rowIndex">
                <!-- GERA CADA COLUNA   -->
                <td v-if="props.selectable">
                  <input :checked="isIncludedInModel(row)" type="checkbox" @change="setModelValue(row)" />
                </td>
                <td v-for="(col, index) in props.cols" :key="index" :class="setAlignTo(col.align)">
                  <slot :name="col.value" v-bind="{ data: row }">
                    {{ row[col.value] }}
                  </slot>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="flex justify-between" v-if="pagination">
      <div>
        <button @click="paginate(changePerPage, 25)"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          per page
        </button>
      </div>
      <div class="flex gap-3">
        <button @click="paginate(previousPage)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">anterior</button>
        <button @click="paginate(nextPage)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">proximo</button>
      </div>
      <div>
        page - {{pagination.page}}
        total - {{props.data?.length}}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SLoader from "@components/SLoader/Index.vue"
import {computed, PropType, ref} from "vue";

type TABLE_COLS = {
  name: string
  value: string
  width?: string
  align?: keyof typeof alignOptions
}

const alignOptions = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
}

type DATA_TABLE_PAGINATION = {
  perPage: number | string
  page: number | string
  total: number | string
}

const emit = defineEmits([
  "update:modelValue",
  "update:pagination"
]);

const props = defineProps({
  loading: Boolean,
  modelValue: { type: null },
  data: {
    type: Array as PropType<any[]>,
    required: true
  },
  cols: {
    type: Array as PropType<TABLE_COLS[]>,
    required: true
  },
  selectable: Boolean,
  pagination: Object as PropType<DATA_TABLE_PAGINATION>,
  serverSide: Boolean
})

// DATA MANAGEMENT
const internalData = computed(() => {
  const page = Number(props.pagination?.page) ?? 1;
  const perPage = Number(props.pagination?.perPage) ?? 10;

  if (props.serverSide) {
    return props.data
  }

  return props.data?.reduce((initial, current, index) => {
    const maxIndex = perPage * page
    const minIndex = page === 1 ? 1 : (page - 1) * perPage

    // @ts-ignore
    if (index <= maxIndex && index >= (minIndex + ((page > 1 && 1) ?? 2))) {
      initial.push(current)
    }

    return initial
  }, [])
})
// END DATA MANAGEMENT

// PAGINATION MANAGEMENT
async function paginate(callback: Function, ...args: any[]) {
  clearInternalModel();
  callback(...args)

  emit("update:modelValue", []);
}

function previousPage () {
  let currentPage = Number(props.pagination?.page);

  if (currentPage <= 1) currentPage = 1;
  else currentPage = currentPage - 1

  emit("update:pagination", {
    ...props.pagination,
    page: currentPage
  })
}

const maxPages = computed(() => {
  if (props.serverSide) {
    return props.pagination!.total
  }

  return Number(props.data?.length) / Number(props.pagination?.perPage)
});

function nextPage () {
  let currentPage = Number(props.pagination?.page);

  if (currentPage < maxPages.value)
    currentPage = currentPage + 1

  emit("update:pagination", {
    ...props.pagination,
    page: currentPage
  })
}

function changePerPage (value: number) {
  emit("update:pagination", {
    ...props.pagination,
    perPage: value
  })
}
// END PAGINATION MANAGEMENT

function setAlignTo (position: "left" | "right" | "center" = "left") {
  return alignOptions[position]
}

// CHECKBOX MANAGEMENT
const internalModel = ref<Set<any>>(new Set())
function processModel (value: any) {
  const _internalModel = internalModel.value;
  const action = _internalModel.has(value) ? "delete" : "add";

  _internalModel[action](value)
}

const checkAllIsToggled = computed({
  get: () => internalModel.value.size === internalData.value.length,
  set: (val) => {
    if (!val) {
      clearInternalModel()
      emit("update:modelValue", Array.from(internalModel.value))
      return val;
    }

    internalData.value.map((item: any) => {
      internalModel.value.add(item)
    });

    emit("update:modelValue", Array.from(internalModel.value))
    return val
  }
})

function clearInternalModel () {
  internalModel.value.clear()
}

function isIncludedInModel(value: any) {
  return internalModel.value.has(value)
}

function setModelValue(value: any) {
  processModel(value)
  emit("update:modelValue", Array.from(internalModel.value))
}
// END CHECKBOX MANAGEMENT

const colors = {}
const borders = {}

</script>
<style lang="postcss" scoped>

table {
  @apply min-w-full
}

thead {
  @apply bg-white border-b
}

thead th {
  @apply text-sm font-medium text-gray-900 px-6 py-4
}

tbody {
  @apply bg-white transition duration-300 ease-in-out
}

tbody tr {
  @apply hover:bg-gray-100
}

tbody td {
  @apply text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap
}

</style>